const {
  db,
  models: { Team, Excel_Ranking },
} = require("../db/index.js");

let teams = [
  { team: "chiefs", spread: 8 },
  { team: "eagles", spread: 9 },
  { team: "ravens", spread: 3.5 },
  { team: "pack", spread: 3 },
  { team: "titans", spread: 10.5 },
  { team: "colts", spread: 14.5 },
  { team: "vikings", spread: 4 },
  { team: "wash", spread: 7 },
  { team: "saints", spread: 4.5 },
  { team: "bills", spread: 16.5 },
  { team: "pats", spread: 6 },
  { team: "bucs", spread: 9.5 },
  { team: "cards", spread: 5.5 },
  { team: "rams", spread: 7.5 },
  { team: "chargers", spread: 1 },
  { team: "9ers", spread: 18 },
];

const XLSX = require("xlsx");

const excelDoc = XLSX.readFile("./excel_docs/DVOA Conversion.xlsx").Sheets[
  "DVOA_Data"
];

const teamRankInfo = XLSX.utils.sheet_to_json(excelDoc);

// const DVOA_Obj = {};

// OG_Data.forEach((teamData) => (DVOA_Obj[teamData.team] = teamData.rank));

/////////////15 games/////////////
//teams = teams.filter((team) => team.team !== "titans");
/////////////15 games/////////////

/////////////14 games/////////////
//teams = teams.filter((team) => team.team !== "pack" && team.team !== "titans");
/////////////14 games/////////////

/////////////chiefs = locked && rank = 14/////////////
// teams = teams.map((team) => {
//   if (team.team === "chiefs") {
//     (team.locked = true), (team.rank = 14);
//   }
//   return team;
// });
/////////////chiefs = locked/////////////

const syncAndSeed = async () => {
  await db.sync({ force: true });
  /////////////////////////////////////////////////////////////
  await Promise.all(
    teamRankInfo.map((team) =>
      Excel_Ranking.create({
        team: team.name,
        rank: team.rank,
      })
    )
  );
};

module.exports = syncAndSeed;
