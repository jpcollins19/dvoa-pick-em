const {
  db,
  models: { Team },
} = require("../db/index.js");

let teams = [
  { name: "chiefs", spread: 8 },
  { name: "eagles", spread: 9 },
  { name: "ravens", spread: 3.5 },
  { name: "pack", spread: 3 },
  { name: "titans", spread: 10.5 },
  { name: "colts", spread: 14.5 },
  { name: "vikings", spread: 4 },
  { name: "wash", spread: 7 },
  { name: "saints", spread: 4.5 },
  { name: "bills", spread: 16.5 },
  { name: "pats", spread: 6 },
  { name: "bucs", spread: 9 },
  { name: "cards", spread: 5.5 },
  { name: "rams", spread: 7.5 },
  { name: "chargers", spread: 1 },
];

/////////////15 games/////////////
//teams = teams.filter((team) => team.name !== "titans");
/////////////15 games/////////////

/////////////14 games/////////////
//teams = teams.filter((team) => team.name !== "pack" && team.name !== "titans");
/////////////14 games/////////////

/////////////chiefs = locked && rank = 14/////////////
// teams = teams.map((team) => {
//   if (team.name === "chiefs") {
//     (team.locked = true), (team.rank = 14);
//   }
//   return team;
// });
/////////////chiefs = locked/////////////

const syncAndSeed = async () => {
  await db.sync({ force: true });
  /////////////////////////////////////////////////////////////
  // await Promise.all(
  //   teams.map((team) =>
  //     Team.create({
  //       name: team.name,
  //       spread: team.spread,
  //       locked: team.locked,
  //       rank: team.rank,
  //     })
  //   )
  // );
};

module.exports = syncAndSeed;
