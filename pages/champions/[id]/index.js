import { getChampions, getOneChampion } from "../../../utils/api/champion";

// export async function getStaticPaths() {
//   const { data } = await getChampions();

//   let content = [];
//   for (const [key, value] of Object.entries(data.data)) {
//     content.push(value);
//   }

//     const paths = content.data.map((_tutor) => ({
//       params: { id: _tutor.id.toString() },
//     }));
//   return { paths, fallback: "blocking" };
// }

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        fallback: false, // can also be true or 'blocking'
      }
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { data } = await getOneChampion(id);
  return {
    props: {
      champion: Object.values(data.data)[0],
    },
  };
}

const Champion = ({ champion }) => {
  console.log(champion);
  return <h1>Deneme</h1>;
};

export default Champion;
