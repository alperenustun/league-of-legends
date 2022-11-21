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
              Yüzyıllar önce, &apos;Dünya Rünleri&apos; adı verilen büyülü eserler yeniden
              keşfedildi. Sonraki on yıllar boyunca, Rünler hakkındaki bilgi,
              daha fazla şey ortaya çıktıkça yayılmaya başladı. Dünyanın en
              parlak beyinleri, sahip oldukları güçleri belirlemeye çalışarak
              eski glifleri inceledi. Hatta çok azı kökenlerinin önemini veya
              içlerinde barındırdıkları katıksız gücü anlamaya başlayabilirdi.
              Bazıları Rünlerin Runeterra&apos;nın yaratılmasının ayrılmaz bir
              parçası olduğunu düşündü. Bu gizemli eserlerin ilk kullanımı, tüm
              ulusların manzarasını yeniden şekillendirdikleri için felaketle
              sonuçlandı. Rünleri bilenler bu tür &quot;Yapıcıların Kudreti&quot;nin bir
              silah olarak kullanıldığını hayal ettikçe, güvensizlik hızla
              arttı. Rün Savaşları olarak bilinen bu büyülü eserlerle ilgili
              çatışmalar çıkmaya başladı.
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
