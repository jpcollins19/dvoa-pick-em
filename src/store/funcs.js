const DVOA_Obj = {
  eagles: 1,
  bills: 2,
  "9ers": 3,
  boys: 4,
  ravens: 5,
  bengals: 6,
  chiefs: 7,
  fins: 8,
  jets: 9,
  hawks: 10,
  lions: 11,
  pats: 12,
  bucs: 13,
  browns: 14,
  pack: 15,
  falcons: 16,
  wash: 17,
  jags: 18,
  steelers: 19,
  titans: 20,
  vikings: 21,
  saints: 22,
  broncos: 23,
  giants: 24,
  raiders: 25,
  chargers: 26,
  rams: 27,
  panthers: 28,
  bears: 29,
  cards: 30,
  colts: 31,
  texans: 32,
};

const capFirstLetter = (str) => {
  return str
    .split("")
    .map((letter, idx) => {
      if (idx === 0) letter = letter.toUpperCase();
      return letter;
    })
    .join("");
};

const createCountObj = (arr, key) => {
  return arr.reduce((a, obj) => {
    a[obj[key]] ? a[obj[key]]++ : (a[obj[key]] = 1);
    return a;
  }, {});
};

const sortSingleSpread = (arr, lockedRanks, str) => {
  let highestRank = -1;

  arr
    .filter((team) => !team.locked)
    .forEach((team) => {
      if (team.rank > highestRank) highestRank = team.rank;
    });

  arr = arr.sort((a, b) => a.dvoaRank - b.dvoaRank);

  arr
    .filter((team) => !team.locked)
    .forEach((team) => {
      while (lockedRanks.includes(highestRank)) highestRank--;

      team.rank = highestRank;
      highestRank--;
    });

  return arr;
};

const DVOA_Obj_TESTING = {
  eagles: 1,
  bills: 2,
  "9ers": 3,
  boys: 4,
  ravens: 5,
  bengals: 6,
  chiefs: 7,
  fins: 8,
  jets: 9,
  hawks: 10,
  lions: 11,
  pats: 12,
  bucs: 13,
  browns: 14,
  pack: 15,
  falcons: 16,
  wash: 17,
  jags: 18,
  steelers: 19,
  titans: 20,
  vikings: 21,
  saints: 22,
  broncos: 23,
  giants: 24,
  raiders: 25,
  chargers: 26,
  rams: 27,
  panthers: 28,
  bears: 29,
  cards: 30,
  colts: 31,
  texans: 32,
};

const rankDVOA = (arr, lockedRanks, str) => {
  arr = arr.map((obj) => {
    obj.dvoaRank = str.length ? DVOA_Obj_TESTING[obj.team] : DVOA_Obj[obj.team];

    return obj;
  });

  const sameSpreadAuditObj = arr.reduce((a, team) => {
    !a[team.spread] ? (a[team.spread] = [team]) : a[team.spread].push(team);

    return a;
  }, {});

  let newArr = [];

  Object.keys(sameSpreadAuditObj).forEach((number) => {
    const newOrder = sortSingleSpread(
      sameSpreadAuditObj[number],
      lockedRanks,
      str
    );

    newArr = [...newArr, ...newOrder];
  });

  return newArr;
};

const sameSpreadAudit = (arr, str) => {
  const spreadCountObj = createCountObj(arr, "spread");

  const lockedTeams = arr.filter((team) => team.locked);

  const lockedRanks = [];

  if (lockedTeams.length)
    lockedTeams.forEach((team) => lockedRanks.push(team.rank));

  let dupeSpreadTeams = arr.filter((team) => spreadCountObj[team.spread] > 1);

  let nonDupeSpreadTeams = arr.filter(
    (team) => spreadCountObj[team.spread] === 1
  );

  if (dupeSpreadTeams.length) {
    dupeSpreadTeams = rankDVOA(dupeSpreadTeams, lockedRanks, str);
  }

  return [...dupeSpreadTeams, ...nonDupeSpreadTeams];
};

const sortTeams = (arr, str = "") => {
  let rank = arr.length;

  const lockedAudit = arr.map((team) => team.locked);

  if (lockedAudit.includes(true)) {
    const ranksUsed = [];

    const lockedTeams = arr.filter((team) => team.locked);

    lockedTeams.forEach((team) => ranksUsed.push(team.rank));

    const unLockedTeams = arr
      .filter((team) => !team.locked)
      .sort((a, b) => b.spread - a.spread)
      .map((team) => {
        while (ranksUsed.includes(rank)) rank--;

        ranksUsed.push(rank);
        team.rank = rank;
        rank--;
        return team;
      });

    arr = [...lockedTeams, ...unLockedTeams];
  } else {
    arr = arr
      .sort((a, b) => b.spread - a.spread)
      .map((team) => {
        team.rank = rank;
        rank--;
        return team;
      });
  }

  arr = sameSpreadAudit(arr, str);

  return arr.sort((a, b) => b.rank - a.rank);
};

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
//       randomizedObj[team.rank] = team.team;
//       counter--;
//     });

//     numOfTeams = unLockedTeams.length;
//   }

//   if (unLockedTeams !== undefined && unLockedTeams.length === 1) {
//     const team = unLockedTeams[0];

//     randomizedObj[team.rank] = team.team;
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
//     team = arr.find((team) => team.team === entry[1]);
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

// const sameSpreadAuditOG = (arr) => {
//   const spreadCountObj = createCountObj(arr, "spread");

//   const lockedTeams = arr.filter((team) => team.locked);

//   const lockedRanks = [];

//   if (lockedTeams.length)
//     lockedTeams.forEach((team) => lockedRanks.push(team.rank));

//   let dupeSpreadTeams = arr.filter((team) => spreadCountObj[team.spread] > 1);
//   let nonDupeSpreadTeams = arr.filter(
//     (team) => spreadCountObj[team.spread] === 1
//   );

//   if (dupeSpreadTeams.length)
//     dupeSpreadTeams = randomize(dupeSpreadTeams, lockedRanks);

//   return [...dupeSpreadTeams, ...nonDupeSpreadTeams];
// };

// const sortOG = (arr) => {
//   let rank = arr.length;

//   const lockedAudit = arr.map((team) => team.locked);

//   if (lockedAudit.includes(true)) {
//     const numOfTeams = arr.length + 1;

//     const ranksUsed = [];
//     const lockedTeams = arr.filter((team) => team.locked);

//     lockedTeams.forEach((team) => ranksUsed.push(team.rank));

//     const unLockedTeams = arr
//       .filter((team) => !team.locked)
//       .sort((a, b) => b.spread - a.spread)
//       .map((team) => {
//         while (ranksUsed.includes(rank)) rank--;

//         ranksUsed.push(rank);
//         team.rank = rank;
//         rank--;

//         return team;
//       });

//     arr = [...lockedTeams, ...unLockedTeams];
//   } else {
//     arr = arr
//       .sort((a, b) => b.spread - a.spread)
//       .map((team) => {
//         team.rank = rank;
//         rank--;
//         return team;
//       });
//   }

//   arr = sameSpreadAuditOG(arr);

//   return arr.sort((a, b) => b.rank - a.rank);
// };

module.exports = { capFirstLetter, sortTeams };
