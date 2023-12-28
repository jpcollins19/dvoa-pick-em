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

const sortSingleSpread = (teamArray, lockedRanks) => {
  let highestRank = -1;

  teamArray
    .filter((team) => !team.locked)
    .forEach((team) => {
      if (team.rank > highestRank) highestRank = team.rank;
    });

  teamArray.sort((a, b) => a.dvoaRank - b.dvoaRank);

  teamArray
    .filter((team) => !team.locked)
    .forEach((team) => {
      while (lockedRanks.includes(highestRank)) {
        highestRank--;
      }

      team.rank = highestRank--;
    });

  return teamArray;
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

const rankDVOA = (teamArray, lockedRanks, DVOA_Rank) => {
  teamArray.forEach((obj) => {
    obj.dvoaRank = DVOA_Rank[obj.team];

    return obj;
  });

  const sameSpreadAuditObj = teamArray.reduce((a, team) => {
    !a[team.spread] ? (a[team.spread] = [team]) : a[team.spread].push(team);

    return a;
  }, {});

  let newArr = [];

  Object.keys(sameSpreadAuditObj).forEach((number) => {
    const newOrder = sortSingleSpread(sameSpreadAuditObj[number], lockedRanks);

    newArr = [...newArr, ...newOrder];
  });

  return newArr;
};

const sameSpreadAudit = (teamArray, DVOA_Rank) => {
  const spreadCountObj = createCountObj(teamArray, "spread");

  const lockedRanks = [];

  teamArray
    .filter((team) => team.locked)
    .forEach((team) => lockedRanks.push(team.rank));

  let dupeSpreadTeams = teamArray.filter(
    (team) => spreadCountObj[team.spread] > 1
  );

  let nonDupeSpreadTeams = teamArray.filter(
    (team) => spreadCountObj[team.spread] === 1
  );

  dupeSpreadTeams = rankDVOA(dupeSpreadTeams, lockedRanks, DVOA_Rank);

  return [...dupeSpreadTeams, ...nonDupeSpreadTeams];
};

const sortTeams = (teamArray, DVOA_Rank) => {
  let rank = teamArray.length;

  const lockedTeams = teamArray.filter((team) => team.locked);

  if (lockedTeams.length) {
    const ranksUsed = [];

    lockedTeams.forEach((team) => ranksUsed.push(team.rank));

    const unLockedTeams = teamArray
      .filter((team) => !team.locked)
      .sort((a, b) => b.spread - a.spread)
      .map((team) => {
        while (ranksUsed.includes(rank)) rank--;

        ranksUsed.push(rank);
        team.rank = rank--;

        return team;
      });

    teamArray = [...lockedTeams, ...unLockedTeams];
  } else {
    teamArray
      .sort((a, b) => b.spread - a.spread)
      .map((team) => {
        team.rank = rank--;
        return team;
      });
  }

  teamArray = sameSpreadAudit(teamArray, DVOA_Rank);

  return teamArray.sort((a, b) => b.rank - a.rank);
};

module.exports = { capFirstLetter, sortTeams };
