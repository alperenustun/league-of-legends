import styles from "./ChampionCard.module.scss"

function ChampionCard({champion}) {
  return (
    <div className={styles.container}>
        <img className={styles.image} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} />
        <div className={styles.titles}>
            <h2>{champion.name}</h2>
            <h3>{champion.title}</h3>
        </div>
        <div className={styles.abilities}>
            <div>
                <img className={styles.spellImage} src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/passive/${champion.passive.image.full}`} alt="spell passive"/>
                <span>P</span>
            </div>
            <div>
                <img className={styles.spellImage} src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${champion.spells[0].image.full}`} alt="spell Q"/>
                <span>Q</span>
            </div>
            <div>
                <img className={styles.spellImage} src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${champion.spells[1].image.full}`} alt="spell W"/>
                <span>W</span>
            </div>
            <div>
                <img className={styles.spellImage} src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${champion.spells[2].image.full}`} alt="spell E"/>
                <span>E</span>
            </div>
            <div>
                <img className={styles.spellImage} src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${champion.spells[3].image.full}`} alt="spell R"/>
                <span>R</span>
            </div>
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