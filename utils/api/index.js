import axios from "axios";

const base = axios.create({
  baseURL: "http://ddragon.leagueoflegends.com/cdn/12.22.1/data/tr_TR",
});

export { base };