const db = require("./db");
const Team = require("./models/Team");
const Excel_Ranking = require("./models/Excel_Ranking");

module.exports = {
  db,
  models: {
    Team,
    Excel_Ranking,
  },
};
