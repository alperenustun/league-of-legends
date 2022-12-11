import Link from "next/link";
import { useState, useEffect } from "react";
import ChampionSmall from "../../components/ChampionSmall/ChampionSmall";
import Navbar from "../../components/Navbar/Navbar";
import { getChampions } from "../../utils/api/champion";
import styles from "./champions.module.scss";

export default function Home({ champions }) {
  let content = [];
  for (const [key, value] of Object.entries(champions.data)) {
    content.push(<Link href={`/champions/${value.id}`} key={value.id}><ChampionSmall champion={value} /></Link>);
  }

  const [loadedChamp, setloadedChamp] = useState(30);
  const [champData, setChampData] = useState(content.slice(0, loadedChamp));

  useEffect(() => {
    setChampData(content.slice(0, loadedChamp));
  }, [loadedChamp]);

  function loadMoreContent() {
    setloadedChamp((prevValue) => prevValue + 30);
  }

  function onSearchEvent(event) {
    setChampData(
      content.filter((element) =>
        element.key
          .toLowerCase()
          .includes(event.target.value.toLowerCase().replace(/\s/g, ''))
      )
    );
  }

  return (
    <div style={{position: "relative"}} className={styles.container}>
      <Navbar />
      <input className={styles.searchBar} onChange={onSearchEvent} type="text" id="search" placeholder="search champion..." />
      <div className={styles.championsContainer}>
        {champData}
      </div>
      <button className={styles.moreButton} onClick={loadMoreContent}>More</button>
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
