import styles from "./ChampionSmall.module.scss"

function ChampionCard({champion}) {
  return (
    <div className={styles.container}>
        <img className={styles.image} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} />
        <div className={styles.titles}>
            <h2>{champion.name}</h2>
            <h3>{champion.title}</h3>
        </div>
        <div className={styles.statsFirst}>
            <div className={styles.stat}>
                <img className={styles.statsImage} src="/assets/attack.png" />
                <span>{champion.info.attack}</span>
            </div>
            <div className={styles.stat}>
                <img className={styles.statsImage} src="/assets/defense.png" />
                <span>{champion.info.defense}</span>
            </div>
        </div>
        <div className={styles.statsSecond}>
            <div className={styles.stat}>
                <img className={styles.statsImage} src="/assets/magic.png" />
                <span>{champion.info.magic}</span>
            </div>
            <div className={styles.stat}>
                <img className={styles.statsImage} src="/assets/difficulty.png" />
                <span>{champion.info.difficulty}</span>
            </div>
        </div>
    </div>
  )
}

export default ChampionCard