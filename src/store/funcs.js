const capFirstLetter = (str) => {
  return str
    .split("")
    .map((letter, idx) => {
      if (idx === 0) letter = letter.toUpperCase();
      return letter;
    })
    .join("");
};

// const createCountObj = (arr, key) => {
//   return arr.reduce((a, obj) => {
//     a[obj[key]] ? a[obj[key]]++ : (a[obj[key]] = 1);
//     return a;
//   }, {});
// };

// const setAudit = (arr) => {
//   console.log("arr", arr);

//   const set = new Set(arr);

//   // console.log("set", set);

//   let error = false;

//   if (set.size === 2 && set.has(null)) error = true;

//   if (set.size === 1 && set.has(null)) error = true;

//   // console.log("error in set func", error);

//   return error;
// };

// const blankAuditFunc = (setObj) => {
//   let error = true;

//   const audit = [];

//   Object.values(setObj).forEach((team) => {
//     const set = new Set([team.name, team.rank, team.spread, team.locked]);

//     set.size === 2 && set.has(null) && set.has(false)
//       ? audit.push("NIGO")
//       : audit.push("IGO");
//   });

//   const setAudit = new Set(audit);

//   if (setAudit.size === 2 && setAudit.has("IGO")) error = false;

//   return error;
// };

// const randomizeSingleSpread = (arr, lockedRanks) => {
//   const lockedAudit = arr.map((team) => team.locked);

//   let numOfTeams = arr.length;

//   let counter = numOfTeams;

//   let highestRank = -1;
//   let lowestRank = 99;

//   arr
//     .filter((team) => !team.locked)
//     .forEach((team) => {
//       if (team.rank > highestRank) highestRank = team.rank;
//       if (team.rank < lowestRank) lowestRank = team.rank;
//     });

//   const ranksUsed = [];

//   lockedRanks.length && lockedRanks.forEach((rank) => ranksUsed.push(rank));

//   const idxsUsed = [];

//   const randomizedObj = {};

//   let randomRank, randomIdx, lockedTeams, unLockedTeams, currentIdxTeam;

//   if (lockedAudit.includes(true)) {
//     lockedTeams = arr.filter((team) => team.locked);
//     unLockedTeams = arr.filter((team) => !team.locked);

//     lockedTeams.forEach((team) => {
//       ranksUsed.push(team.rank);
//       randomizedObj[team.rank] = team.name;
//       counter--;
//     });

//     numOfTeams = unLockedTeams.length;
//   }

//   if (unLockedTeams !== undefined && unLockedTeams.length === 1) {
//     const team = unLockedTeams[0];

//     randomizedObj[team.rank] = team.name;
//   } else {
//     while (counter > 0) {
//       randomRank = Math.ceil(Math.random() * highestRank);
//       randomIdx = Math.floor(Math.random() * numOfTeams);

//       if (
//         randomRank >= lowestRank &&
//         randomRank <= highestRank &&
//         !ranksUsed.includes(randomRank) &&
//         !idxsUsed.includes(randomIdx)
//       ) {
//         currentIdxTeam = lockedAudit.includes(true)
//           ? unLockedTeams[randomIdx].name
//           : arr[randomIdx].name;

//         randomizedObj[randomRank] = currentIdxTeam;
//         ranksUsed.push(randomRank);
//         idxsUsed.push(randomIdx);
//         counter--;
//       }
//     }
//   }

//   arr = Object.entries(randomizedObj).map((entry) => {
//     team = arr.find((team) => team.name === entry[1]);
//     team.rank = Number(entry[0]);
//     return team;
//   });

//   return arr;
// };

// const randomize = (arr, lockedRanks) => {
//   const sameSpreadAuditObj = arr.reduce((a, team) => {
//     !a[team.spread] ? (a[team.spread] = [team]) : a[team.spread].push(team);

//     return a;
//   }, {});

//   let newArr = [];

//   Object.keys(sameSpreadAuditObj).forEach((number) => {
//     const newOrder = randomizeSingleSpread(
//       sameSpreadAuditObj[number],
//       lockedRanks
//     );

//     newArr = [...newArr, ...newOrder];
//   });

//   return newArr;
// };

const sameSpreadAudit = (arr) => {
  const spreadCountObj = createCountObj(arr, "spread");

  const lockedTeams = arr.filter((team) => team.locked);

  const lockedRanks = [];

  // if (lockedTeams.length) {
  //   lockedTeams.forEach((team) => lockedRanks.push(team.rank));
  // }

  let dupeSpreadTeams = arr.filter((team) => spreadCountObj[team.spread] > 1);
  let nonDupeSpreadTeams = arr.filter(
    (team) => spreadCountObj[team.spread] === 1
  );

  // if (dupeSpreadTeams.length) {
  //   dupeSpreadTeams = randomize(dupeSpreadTeams, lockedRanks);
  // }

  return [...dupeSpreadTeams, ...nonDupeSpreadTeams];
};

const sortTeams = (arr) => {
  let rank = arr.length;

  const lockedAudit = arr.map((team) => team.locked);

  if (lockedAudit.includes(true)) {
    // const numOfTeams = arr.length + 1;
    // const ranksUsed = [];
    // const lockedTeams = arr.filter((team) => team.locked);
    // lockedTeams.forEach((team) => ranksUsed.push(team.rank));
    // const unLockedTeams = arr
    //   .filter((team) => !team.locked)
    //   .sort((a, b) => b.spread - a.spread)
    //   .map((team) => {
    //     while (ranksUsed.includes(rank)) rank--;
    //     ranksUsed.push(rank);
    //     team.rank = rank;
    //     rank--;
    //     return team;
    //   });
    // arr = [...lockedTeams, ...unLockedTeams];
  } else {
    arr = arr
      .sort((a, b) => b.spread - a.spread)
      .map((team) => {
        team.rank = rank;
        rank--;
        return team;
      });
  }

  arr = sameSpreadAudit(arr);

  return arr.sort((a, b) => b.rank - a.rank);
};

module.exports = { capFirstLetter, sortTeams };
//module.exports = { capFirstLetter, sort, setAudit, blankAuditFunc };
