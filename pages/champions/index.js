import ChampionSmall from "../../components/ChampionSmall/ChampionSmall";
import { getChampions } from "../../utils/api/champion";
import styles from "./champions.module.scss";

export default function Home({ champions }) {
    let content = [];
    for (const [key, value] of Object.entries(champions.data)) {
        content.push(<ChampionSmall key={value.id} champion={value} />)
    }
    // for (const [key, value] of Object.entries(champions.data)) {
    //     content.push(<h1>{JSON.stringify(value)} <hr></hr></h1>)
    // }
  return (
    <div className={styles.container}>
      {content}
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await getChampions();
  return {
    props: {
      champions: data,
    },
  };
}
