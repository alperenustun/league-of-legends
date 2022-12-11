import { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
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

  const [spellDescription, setSpellDescription] = useState({spellName: champion.passive.name, spellDescription: champion.passive.description, spellActive: 4})
  function handleSpellClick(spellIndex){
    switch (spellIndex) {
      case 1:
        setSpellDescription({spellName: champion.spells[0].name, spellDescription: champion.spells[0].description, spellActive: 0})
        break;
      case 2:
        setSpellDescription({spellName: champion.spells[1].name, spellDescription: champion.spells[1].description, spellActive: 1})
        break;
      case 3:
        setSpellDescription({spellName: champion.spells[2].name, spellDescription: champion.spells[2].description, spellActive: 2})
        break;
      case 4:
        setSpellDescription({spellName: champion.spells[3].name, spellDescription: champion.spells[3].description, spellActive: 3})
        break;
      default:
        setSpellDescription({spellName: champion.passive.name, spellDescription: champion.passive.description, spellActive: 4})
        break;
    }
  }


  const championBackgroundStyle = {
    background: `linear-gradient(rgba(0,9,19,0.2),rgba(0,9,19,0.3), rgba(0,9,19,0.4),rgba(0,9,19,0.6), rgba(0,9,19,1)), url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg) no-repeat center center / cover`
  }

  return (
    <div style={{position: "relative"}} className={styles.main}>
      <Navbar />
      <header className={styles.header} style={championBackgroundStyle}>
        <img className={styles.mainImage} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} />
        <h2 className={styles.subtitle}>{champion.title}</h2>
        <h1 className={styles.title}>{champion.name}</h1>
      </header>

      <div className={styles.championLoreContainer}>
        {champion.lore}
      </div>

      <div className={styles.rolesContainer}>
        {champion.tags.length === 2 
        ? <div className={styles.roles} >{champion.tags[0]} / {champion.tags[1]}</div>
        : <div className={styles.roles} >{champion.tags[0]} </div>
        }
        <div className={styles.infoContainer}>
          <span>{champion.info.attack} <img className={styles.infoImg} src="/assets/attack.png" /></span>
          <span>{champion.info.defense} <img className={styles.infoImg} src="/assets/defense.png" /></span>
          <span>{champion.info.magic} <img className={styles.infoImg} src="/assets/magic.png" /></span>
          <span>{champion.info.difficulty} <img className={styles.infoImg} src="/assets/difficulty.png" /></span>
        </div>
      </div>

      <div className={styles.spellsContainer}>
        <div className={styles.spellImagesAll}>
          <img style={spellDescription.spellActive === 4 ? {border: '1px solid yellow', boxShadow: '0 0 15px yellow'} : {border: '1px solid #6b5d16'}} onClick={() => handleSpellClick(5)} className={styles.spellImage} src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/passive/${champion.passive.image.full}`} alt="spell passive" />
          <img style={spellDescription.spellActive === 0 ? {border: '1px solid yellow', boxShadow: '0 0 15px yellow'} : {border: '1px solid #6b5d16'}} onClick={() => handleSpellClick(1)} className={styles.spellImage} src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${champion.spells[0].image.full}`} alt="spell Q" />
          <img style={spellDescription.spellActive === 1 ? {border: '1px solid yellow', boxShadow: '0 0 15px yellow'} : {border: '1px solid #6b5d16'}} onClick={() => handleSpellClick(2)} className={styles.spellImage} src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${champion.spells[1].image.full}`} alt="spell W" />
          <img style={spellDescription.spellActive === 2 ? {border: '1px solid yellow', boxShadow: '0 0 15px yellow'} : {border: '1px solid #6b5d16'}} onClick={() => handleSpellClick(3)} className={styles.spellImage} src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${champion.spells[2].image.full}`} alt="spell E" />
          <img style={spellDescription.spellActive === 3 ? {border: '1px solid yellow', boxShadow: '0 0 15px yellow'} : {border: '1px solid #6b5d16'}} onClick={() => handleSpellClick(4)} className={styles.spellImage} src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${champion.spells[3].image.full}`} alt="spell R" />
        </div>
        <div className={styles.spellDescriptionContainer}>
          <h3 className={styles.spellDescriptionTitle}>{spellDescription.spellName}</h3>
          <p className={styles.spellDescriptionParag}>{spellDescription.spellDescription}</p>
        </div>
      </div>
      
      <div className={styles.skinsContainer}>
        {champion.skins.map(skin => {
          return(
            <div className={styles.skinCard} key={skin.id}>
              <img className={styles.skinCardImage} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`} />
              <h2 className={styles.skinCardTitle}>{skin.name}</h2>
            </div>
          )
        })}
      </div>

    </div>
  )
};

export default Champion;
