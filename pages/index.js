import ChampionCard from "../components/ChampionCard/ChampionCard";
import styles from "../styles/home.module.scss";
import { getOneChampion } from "../utils/api/champion";

export default function Home({champion}) {
  return (
    <div>
      <div className={styles.landing}>
        <img className={styles.logo} src="/assets/logo.png" />
        <div className={styles.titles}>
          <h1 className={styles.title}>
            Hiçbir şafak, karanlık olmadan sökmez.
          </h1>
          <h2 className={styles.subtitle}>-Nasus</h2>
        </div>
        <span className={styles.explore}>Şampiyonları Keşfet</span>
      </div>

      <div className={styles.seperator}></div>

      <section className={styles.championsSection}>
        <div className={styles.championsSectionContainer}>
          <div className={styles.championsSectionText}>
            <h1>League of Legends Evrenini Keşfedin</h1>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Cras gravida nibh vel hendrerit
              fringilla. Pellentesque non est elementum, posuere quam nec,
              posuere arcu. Fusce vulputate pretium dui, a molestie tellus.
              Integer tempor eros in consequat pellentesque. Curabitur tincidunt
              quis orci in ultrices. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <button className={styles.championsSectionButton}>Şampiyonlar</button>
          </div>
          <div className={styles.championsSectionCard}>
            <ChampionCard champion={champion} />
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps(){
  const {data} = await getOneChampion('Zed');
  return {
    props: {
      champion: Object.values(data.data)[0]
    },
  };
}
