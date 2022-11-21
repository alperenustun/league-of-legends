import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
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
  function loadMoreContent(){
    setloadedChamp(prevValue => prevValue + 20);
    setChampData(content.slice(0, loadedChamp));
  }
  const [loadedChamp, setloadedChamp] = useState(20)
  const [champData, setChampData] = useState(content.slice(0,loadedChamp));
  return (
    <div className={styles.container}>
      {/* {champData a}
      <button onClick={loadMoreContent}>More</button> */}
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
