import Link from "next/link";
import ChampionCard from "../components/ChampionCard/ChampionCard";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/home.module.scss";
import { getOneChampion } from "../utils/api/champion";

export default function Home({ champion }) {
  return (
    <div style={{position: "relative"}}>
      <Navbar />
      <div className={styles.landing}>
        <img className={styles.logo} src="/assets/logo.png" />
        <div className={styles.titles}>
          <h1 className={styles.title}>
          &quot;No dawn comes without darkness.&quot;
          </h1>
          <h2 className={styles.subtitle}>-Nasus</h2>
        </div>
        <span className={styles.explore}>Explore Champions</span>
      </div>

      <div className={styles.seperator}></div>

      <section className={styles.championsSection}>
        <div className={styles.championsSectionContainer}>
          <div className={styles.championsSectionText}>
            <h1>Explore the League of Legends Universe</h1>
            <Link href={'/champions'}>
            <button className={styles.championsSectionButton}>
              Champions
            </button>
            </Link>
          </div>
          <div className={styles.championsSectionCard}>
            <Link href={'/champions/Zed'}>
              <ChampionCard champion={champion} />
            </Link>  
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await getOneChampion("Zed");
  return {
    props: {
      champion: Object.values(data.data)[0],
    },
  };
}
