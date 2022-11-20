import { base } from "./index";

function getOneChampion(champion) {
  return base.get(`/champion/${champion}.json`);
}

function getChampions() {
  return base.get(`/champion.json`);
}

export {getOneChampion, getChampions}