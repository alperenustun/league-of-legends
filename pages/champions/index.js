import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ChampionSmall from "../../components/ChampionSmall/ChampionSmall";
import { getChampions } from "../../utils/api/champion";
import styles from "./champions.module.scss";

export default function Home({ champions }) {
  console.log(champions);
  let content = [];
  for (const [key, value] of Object.entries(champions.data)) {
    content.push(<ChampionSmall key={value.id} champion={value} />);
  }
  // for (const [key, value] of Object.entries(champions.data)) {
  //     content.push(<h1>{JSON.stringify(value)} <hr></hr></h1>)
  // }
  const [loadedChamp, setloadedChamp] = useState(20);
  const [champData, setChampData] = useState(content.slice(0, loadedChamp));

  useEffect(() => {
    setChampData(content.slice(0, loadedChamp));
  }, [loadedChamp]);

  function loadMoreContent() {
    setloadedChamp((prevValue) => prevValue + 20);
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
    <div className={styles.container}>
      <input onChange={onSearchEvent} type="text" id="search" />
      {champData}
      <button onClick={loadMoreContent}>More</button>
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
