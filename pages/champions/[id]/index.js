import { getChampions, getOneChampion } from "../../../utils/api/champion";
import styles from "./singleChampion.module.scss";

export async function getStaticPaths(){
  let content = [];

  const { data } = await getChampions();

  for (const [key, value] of Object.entries(data.data)) {
    content.push(value);
  }

  return{
    paths:
      content.map(item => {
        return {params: {id: item.id}}
      }),
    fallback: false,
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
  const championBackgroundStyle = {
    background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg) no-repeat center center / cover`
  }

  return (
    <div>
      <header className={styles.header} style={championBackgroundStyle}>
        <img className={styles.mainImage} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} />
        <h2 className={styles.subtitle}>{champion.title}</h2>
        <h1 className={styles.title}>{champion.name}</h1>
      </header>
    </div>
  )
};

export default Champion;
