const { expect } = require("chai");
const { capFirstLetter, sortTeams } = require("./src/store/funcs");

describe("capFirstLetter func", () => {
  it("capitalizes the first letter of each word", () => {
    const team = capFirstLetter("team");
    const spread = capFirstLetter("spread");
    const locked = capFirstLetter("locked");
    const rank = capFirstLetter("rank");

    expect(team).to.equal("Team");
    expect(spread).to.equal("Spread");
    expect(locked).to.equal("Locked");
    expect(rank).to.equal("Rank");
  });
});

describe("sortTeams func", () => {
  let teams, teamData, teams2Find, answer, lockedAudit;

  describe("no locking", () => {
    beforeEach(() => {
      teams = [
        { team: "9ers", spread: "8", rank: 14, locked: false },
        { team: "boys", spread: "8", rank: 5, locked: false },
        { team: "bengals", spread: "3.5", rank: null, locked: false },
        { team: "fins", spread: "5.5", rank: null, locked: false },
        { team: "jets", spread: "3", rank: null, locked: false },
        { team: "hawks", spread: "10.5", rank: null, locked: false },
        { team: "lions", spread: "14.5", rank: null, locked: false },
        { team: "falcons", spread: "4", rank: null, locked: false },
        { team: "jags", spread: "7", rank: null, locked: false },
        { team: "steelers", spread: "3.5", rank: null, locked: false },
        { team: "broncos", spread: "16.5", rank: null, locked: false },
        { team: "giants", spread: "6", rank: null, locked: false },
        { team: "raiders", spread: "9", rank: null, locked: false },
        { team: "panthers", spread: "5.5", rank: null, locked: false },
        { team: "bears", spread: "3.5", rank: null, locked: false },
        { team: "texans", spread: "3", rank: null, locked: false },
      ];
    });

    describe("w/ no dupe spreads", () => {
      it("sorts 3 teams correctly", () => {
        teamData = [
          { team: "9ers", spread: "6" },
          { team: "boys", spread: "8" },
          { team: "bengals", spread: "7" },
        ];

        teams2Find = Object.values(teamData).map((team) => team.team);

        teams = teams
          .filter((team) => teams2Find.includes(team.team))
          .map((team) => {
            teamData.forEach((teeam) => {
              if (teeam.team === team.team) team.spread = teeam.spread;
            });
            return team;
          });

        answer = sortTeams(teams, "test");

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

        expect(answer[0].team).to.equal("boys");
        expect(answer[1].team).to.equal("bengals");
        expect(answer[2].team).to.equal("9ers");

        expect(answer[0].rank).to.equal(3);
        expect(answer[1].rank).to.equal(2);
        expect(answer[2].rank).to.equal(1);
      });

      it("sorts 5 teams correctly", () => {
        teamData = [
          { team: "9ers", spread: "1" },
          { team: "boys", spread: "8" },
          { team: "bengals", spread: "4" },
          { team: "fins", spread: "4.5" },
          { team: "jets", spread: "3" },
        ];

        teams2Find = Object.values(teamData).map((team) => team.team);

        teams = teams
          .filter((team) => teams2Find.includes(team.team))
          .map((team) => {
            teamData.forEach((teeam) => {
              if (teeam.team === team.team) team.spread = teeam.spread;
            });
            return team;
          });

        answer = sortTeams(teams, "test");

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

        expect(answer[0].team).to.equal("boys");
        expect(answer[1].team).to.equal("fins");
        expect(answer[2].team).to.equal("bengals");
        expect(answer[3].team).to.equal("jets");
        expect(answer[4].team).to.equal("9ers");

        expect(answer[0].rank).to.equal(5);
        expect(answer[1].rank).to.equal(4);
        expect(answer[2].rank).to.equal(3);
        expect(answer[3].rank).to.equal(2);
        expect(answer[4].rank).to.equal(1);
      });

      it("sorts 10 teams correctly", () => {
        teamData = [
          { team: "9ers", spread: "1" },
          { team: "boys", spread: "8" },
          { team: "bengals", spread: "4" },
          { team: "fins", spread: "4.5" },
          { team: "jets", spread: "3" },
          { team: "hawks", spread: "1.5" },
          { team: "lions", spread: "16" },
          { team: "falcons", spread: "15" },
          { team: "jags", spread: "14" },
          { team: "steelers", spread: "13.5" },
        ];

        teams2Find = Object.values(teamData).map((team) => team.team);

        teams = teams
          .filter((team) => teams2Find.includes(team.team))
          .map((team) => {
            teamData.forEach((teeam) => {
              if (teeam.team === team.team) team.spread = teeam.spread;
            });
            return team;
          });

        answer = sortTeams(teams, "test");

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

        expect(answer[0].team).to.equal("lions");
        expect(answer[1].team).to.equal("falcons");
        expect(answer[2].team).to.equal("jags");
        expect(answer[3].team).to.equal("steelers");
        expect(answer[4].team).to.equal("boys");
        expect(answer[5].team).to.equal("fins");
        expect(answer[6].team).to.equal("bengals");
        expect(answer[7].team).to.equal("jets");
        expect(answer[8].team).to.equal("hawks");
        expect(answer[9].team).to.equal("9ers");

        expect(answer[0].rank).to.equal(10);
        expect(answer[1].rank).to.equal(9);
        expect(answer[2].rank).to.equal(8);
        expect(answer[3].rank).to.equal(7);
        expect(answer[4].rank).to.equal(6);
        expect(answer[5].rank).to.equal(5);
        expect(answer[6].rank).to.equal(4);
        expect(answer[7].rank).to.equal(3);
        expect(answer[8].rank).to.equal(2);
        expect(answer[9].rank).to.equal(1);
      });

      it("sorts 16 teams correctly", () => {
        teamData = [
          { team: "9ers", spread: "1" },
          { team: "boys", spread: "8" },
          { team: "bengals", spread: "4" },
          { team: "fins", spread: "4.5" },
          { team: "jets", spread: "3" },
          { team: "hawks", spread: "1.5" },
          { team: "lions", spread: "16" },
          { team: "falcons", spread: "15" },
          { team: "jags", spread: "12" },
          { team: "steelers", spread: "13" },
          { team: "broncos", spread: "7" },
          { team: "giants", spread: "14.5" },
          { team: "raiders", spread: "11" },
          { team: "panthers", spread: "6" },
          { team: "bears", spread: "14" },
          { team: "texans", spread: "13.5" },
        ];

        teams2Find = Object.values(teamData).map((team) => team.team);

        teams = teams
          .filter((team) => teams2Find.includes(team.team))
          .map((team) => {
            teamData.forEach((teeam) => {
              if (teeam.team === team.team) team.spread = teeam.spread;
            });
            return team;
          });

        answer = sortTeams(teams, "test");

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

        expect(answer[0].team).to.equal("lions");
        expect(answer[1].team).to.equal("falcons");
        expect(answer[2].team).to.equal("giants");
        expect(answer[3].team).to.equal("bears");
        expect(answer[4].team).to.equal("texans");
        expect(answer[5].team).to.equal("steelers");
        expect(answer[6].team).to.equal("jags");
        expect(answer[7].team).to.equal("raiders");
        expect(answer[8].team).to.equal("boys");
        expect(answer[9].team).to.equal("broncos");
        expect(answer[10].team).to.equal("panthers");
        expect(answer[11].team).to.equal("fins");
        expect(answer[12].team).to.equal("bengals");
        expect(answer[13].team).to.equal("jets");
        expect(answer[14].team).to.equal("hawks");
        expect(answer[15].team).to.equal("9ers");

        expect(answer[0].rank).to.equal(16);
        expect(answer[1].rank).to.equal(15);
        expect(answer[2].rank).to.equal(14);
        expect(answer[3].rank).to.equal(13);
        expect(answer[4].rank).to.equal(12);
        expect(answer[5].rank).to.equal(11);
        expect(answer[6].rank).to.equal(10);
        expect(answer[7].rank).to.equal(9);
        expect(answer[8].rank).to.equal(8);
        expect(answer[9].rank).to.equal(7);
        expect(answer[10].rank).to.equal(6);
        expect(answer[11].rank).to.equal(5);
        expect(answer[12].rank).to.equal(4);
        expect(answer[13].rank).to.equal(3);
        expect(answer[14].rank).to.equal(2);
        expect(answer[15].rank).to.equal(1);
      });
    });

    describe("w/ dupe spreads", () => {
      it("sorts 3 teams correctly", () => {
        teamData = [
          { team: "9ers", spread: "6" },
          { team: "boys", spread: "6" },
          { team: "bengals", spread: "7" },
        ];

        teams2Find = Object.values(teamData).map((team) => team.team);

        teams = teams
          .filter((team) => teams2Find.includes(team.team))
          .map((team) => {
            teamData.forEach((teeam) => {
              if (teeam.team === team.team) team.spread = teeam.spread;
            });
            return team;
          });

        answer = sortTeams(teams, "test");

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

        expect(answer[0].team).to.equal("bengals");
        expect(answer[1].team).to.equal("9ers");
        expect(answer[2].team).to.equal("boys");

        expect(answer[0].rank).to.equal(3);
        expect(answer[1].rank).to.equal(2);
        expect(answer[2].rank).to.equal(1);
      });

      it("sorts 5 teams correctly", () => {
        teamData = [
          { team: "9ers", spread: "1" },
          { team: "boys", spread: "8" },
          { team: "bengals", spread: "4.5" },
          { team: "fins", spread: "4.5" },
          { team: "jets", spread: "3" },
        ];

        teams2Find = Object.values(teamData).map((team) => team.team);

        teams = teams
          .filter((team) => teams2Find.includes(team.team))
          .map((team) => {
            teamData.forEach((teeam) => {
              if (teeam.team === team.team) team.spread = teeam.spread;
            });
            return team;
          });

        answer = sortTeams(teams, "test");

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

        expect(answer[0].team).to.equal("boys");
        expect(answer[1].team).to.equal("bengals");
        expect(answer[2].team).to.equal("fins");
        expect(answer[3].team).to.equal("jets");
        expect(answer[4].team).to.equal("9ers");

        expect(answer[0].rank).to.equal(5);
        expect(answer[1].rank).to.equal(4);
        expect(answer[2].rank).to.equal(3);
        expect(answer[3].rank).to.equal(2);
        expect(answer[4].rank).to.equal(1);
      });

      it("sorts 10 teams correctly", () => {
        teamData = [
          { team: "9ers", spread: "1" },
          { team: "boys", spread: "8" },
          { team: "bengals", spread: "3" },
          { team: "fins", spread: "4.5" },
          { team: "jets", spread: "3" },
          { team: "hawks", spread: "1.5" },
          { team: "lions", spread: "16" },
          { team: "falcons", spread: "15" },
          { team: "jags", spread: "14" },
          { team: "steelers", spread: "13.5" },
        ];

        teams2Find = Object.values(teamData).map((team) => team.team);

        teams = teams
          .filter((team) => teams2Find.includes(team.team))
          .map((team) => {
            teamData.forEach((teeam) => {
              if (teeam.team === team.team) team.spread = teeam.spread;
            });
            return team;
          });

        answer = sortTeams(teams, "test");

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

        expect(answer[0].team).to.equal("lions");
        expect(answer[1].team).to.equal("falcons");
        expect(answer[2].team).to.equal("jags");
        expect(answer[3].team).to.equal("steelers");
        expect(answer[4].team).to.equal("boys");
        expect(answer[5].team).to.equal("fins");
        expect(answer[6].team).to.equal("bengals");
        expect(answer[7].team).to.equal("jets");
        expect(answer[8].team).to.equal("hawks");
        expect(answer[9].team).to.equal("9ers");

        expect(answer[0].rank).to.equal(10);
        expect(answer[1].rank).to.equal(9);
        expect(answer[2].rank).to.equal(8);
        expect(answer[3].rank).to.equal(7);
        expect(answer[4].rank).to.equal(6);
        expect(answer[5].rank).to.equal(5);
        expect(answer[6].rank).to.equal(4);
        expect(answer[7].rank).to.equal(3);
        expect(answer[8].rank).to.equal(2);
        expect(answer[9].rank).to.equal(1);
      });

      it("sorts 16 teams correctly", () => {
        teams = teams.map((team) => {
          if (team.team === "9ers") team.spread = "1";
          if (team.team === "boys") team.spread = "8";
          if (team.team === "bengals") team.spread = "4"; //
          if (team.team === "fins") team.spread = "4"; //
          if (team.team === "jets") team.spread = "3";
          if (team.team === "hawks") team.spread = "1.5";
          if (team.team === "lions") team.spread = "16";
          if (team.team === "falcons") team.spread = "15";
          if (team.team === "jags") team.spread = "14";
          if (team.team === "steelers") team.spread = "13";
          if (team.team === "broncos") team.spread = "7";
          if (team.team === "giants") team.spread = "14.5";
          if (team.team === "raiders") team.spread = "11";
          if (team.team === "panthers") team.spread = "6";
          if (team.team === "bears") team.spread = "14";
          if (team.team === "texans") team.spread = "13.5";
          return team;
        });

        answer = sortTeams(teams, "test");

        teams2Audit = ["colts", "pack", "titans", "wash"];

        lockedAudit = answer.map((user) => user.locked);

        expect(lockedAudit.includes(true)).to.equal(false);

        expect(answer[0].team).to.equal("lions");
        expect(answer[1].team).to.equal("falcons");
        expect(answer[2].team).to.equal("giants");
        expect(answer[3].team).to.equal("jags");
        expect(answer[4].team).to.equal("bears");
        expect(answer[5].team).to.equal("texans");
        expect(answer[6].team).to.equal("steelers");
        expect(answer[7].team).to.equal("raiders");
        expect(answer[8].team).to.equal("boys");
        expect(answer[9].team).to.equal("broncos");
        expect(answer[10].team).to.equal("panthers");
        expect(answer[11].team).to.equal("bengals");
        expect(answer[12].team).to.equal("fins");
        expect(answer[13].team).to.equal("jets");
        expect(answer[14].team).to.equal("hawks");
        expect(answer[15].team).to.equal("9ers");

        expect(answer[0].rank).to.equal(16);
        expect(answer[1].rank).to.equal(15);
        expect(answer[2].rank).to.equal(14);
        expect(answer[3].rank).to.equal(13);
        expect(answer[4].rank).to.equal(12);
        expect(answer[5].rank).to.equal(11);
        expect(answer[6].rank).to.equal(10);
        expect(answer[7].rank).to.equal(9);
        expect(answer[8].rank).to.equal(8);
        expect(answer[9].rank).to.equal(7);
        expect(answer[10].rank).to.equal(6);
        expect(answer[11].rank).to.equal(5);
        expect(answer[12].rank).to.equal(4);
        expect(answer[13].rank).to.equal(3);
        expect(answer[14].rank).to.equal(2);
        expect(answer[15].rank).to.equal(1);
      });
    });
  });

  describe("with locking", () => {
    beforeEach(() => {
      teams = [
        { team: "chiefs", spread: "8", rank: 14, locked: false },
        { team: "eagles", spread: "8", rank: 5, locked: false },
        { team: "ravens", spread: "3.5", rank: null, locked: false },
        { team: "browns", spread: "5.5", rank: null, locked: false },
        { team: "pack", spread: "3", rank: null, locked: false },
        { team: "titans", spread: "10.5", rank: null, locked: false },
        { team: "colts", spread: "14.5", rank: null, locked: false },
        { team: "vikings", spread: "4", rank: null, locked: false },
        { team: "wash", spread: "7", rank: null, locked: false },
        { team: "saints", spread: "3.5", rank: null, locked: false },
        { team: "bills", spread: "16.5", rank: null, locked: false },
        { team: "pats", spread: "6", rank: null, locked: false },
        { team: "bucs", spread: "9", rank: null, locked: false },
        { team: "cards", spread: "5.5", rank: null, locked: false },
        { team: "rams", spread: "3.5", rank: null, locked: false },
        { team: "chargers", spread: "3", rank: null, locked: false },
      ];
    });

    describe("w/ no dupe spreads", () => {
      // it("sorts 3 teams correctly", () => {
      //   teams2Find = ["bills", "colts", "titans"];
      //   teams = teams.filter((team) => teams2Find.includes(team.name));
      //   teams = teams.map((team) => {
      //     if (team.name === "bills") team.spread = "8";
      //     if (team.name === "colts") {
      //       team.spread = "7";
      //       team.locked = true;
      //       team.rank = 1;
      //     }
      //     if (team.name === "titans") team.spread = "6";
      //     return team;
      //   });
      //   answer = sort(teams);
      //   lockedAudit = answer.map((user) => user.locked);
      //   expect(lockedAudit[0]).to.equal(false);
      //   expect(lockedAudit[1]).to.equal(false);
      //   expect(lockedAudit[2]).to.equal(true);
      //   expect(answer[0].name).to.equal("bills");
      //   expect(answer[1].name).to.equal("titans");
      //   expect(answer[2].name).to.equal("colts");
      //   expect(answer[0].rank).to.equal(3);
      //   expect(answer[1].rank).to.equal(2);
      //   expect(answer[2].rank).to.equal(1);
      // });
      // it("sorts 5 teams correctly", () => {
      //   teams2Find = ["bills", "colts", "titans", "wash", "eagles"];
      //   teams = teams.filter((team) => teams2Find.includes(team.name));
      //   teams = teams.map((team) => {
      //     if (team.name === "bills") team.spread = "2";
      //     if (team.name === "colts") {
      //       team.spread = "7";
      //       team.locked = true;
      //       team.rank = 1;
      //     }
      //     if (team.name === "titans") {
      //       team.spread = "9";
      //       team.locked = true;
      //       team.rank = 4;
      //     }
      //     if (team.name === "wash") team.spread = "14";
      //     if (team.name === "eagles") team.spread = "14.5";
      //     return team;
      //   });
      //   answer = sort(teams);
      //   lockedAudit = answer.map((user) => user.locked);
      //   expect(lockedAudit[0]).to.equal(false);
      //   expect(lockedAudit[1]).to.equal(true);
      //   expect(lockedAudit[2]).to.equal(false);
      //   expect(lockedAudit[3]).to.equal(false);
      //   expect(lockedAudit[4]).to.equal(true);
      //   expect(answer[0].name).to.equal("eagles");
      //   expect(answer[1].name).to.equal("titans");
      //   expect(answer[2].name).to.equal("wash");
      //   expect(answer[3].name).to.equal("bills");
      //   expect(answer[4].name).to.equal("colts");
      //   expect(answer[0].rank).to.equal(5);
      //   expect(answer[1].rank).to.equal(4);
      //   expect(answer[2].rank).to.equal(3);
      //   expect(answer[3].rank).to.equal(2);
      //   expect(answer[4].rank).to.equal(1);
      // });
      // it("sorts 6 teams correctly, first team = locked & listed highest rank", () => {
      //   teams2Find = ["chiefs", "titans", "bucs", "ravens", "pack", "pats"];
      //   teams = teams.filter((team) => teams2Find.includes(team.name));
      //   teams = teams.map((team) => {
      //     if (team.name === "chiefs") {
      //       team.spread = "3";
      //       team.locked = true;
      //       team.rank = 6;
      //     }
      //     if (team.name === "titans") team.spread = "5";
      //     if (team.name === "bucs") team.spread = "1";
      //     if (team.name === "ravens") team.spread = "1.5";
      //     if (team.name === "pack") team.spread = "10";
      //     if (team.name === "pats") team.spread = "4";
      //     return team;
      //   });
      //   answer = sort(teams);
      //   lockedAudit = answer.map((user) => user.locked);
      //   expect(lockedAudit[0]).to.equal(true);
      //   expect(lockedAudit[1]).to.equal(false);
      //   expect(lockedAudit[2]).to.equal(false);
      //   expect(lockedAudit[3]).to.equal(false);
      //   expect(lockedAudit[4]).to.equal(false);
      //   expect(answer[0].name).to.equal("chiefs");
      //   expect(answer[1].name).to.equal("pack");
      //   expect(answer[2].name).to.equal("titans");
      //   expect(answer[3].name).to.equal("pats");
      //   expect(answer[4].name).to.equal("ravens");
      //   expect(answer[5].name).to.equal("bucs");
      //   expect(answer[0].rank).to.equal(6);
      //   expect(answer[1].rank).to.equal(5);
      //   expect(answer[2].rank).to.equal(4);
      //   expect(answer[3].rank).to.equal(3);
      //   expect(answer[4].rank).to.equal(2);
      //   expect(answer[5].rank).to.equal(1);
      // });
      // it("sorts 6 teams correctly, first team = locked & listed lowest rank", () => {
      //   teams2Find = ["chiefs", "titans", "bucs", "ravens", "pack", "pats"];
      //   teams = teams.filter((team) => teams2Find.includes(team.name));
      //   teams = teams.map((team) => {
      //     if (team.name === "chiefs") {
      //       team.spread = "3";
      //       team.locked = true;
      //       team.rank = 1;
      //     }
      //     if (team.name === "titans") team.spread = "5";
      //     if (team.name === "bucs") team.spread = "1";
      //     if (team.name === "ravens") team.spread = "1.5";
      //     if (team.name === "pack") team.spread = "10";
      //     if (team.name === "pats") team.spread = "4";
      //     return team;
      //   });
      //   answer = sort(teams);
      //   lockedAudit = answer.map((user) => user.locked);
      //   expect(lockedAudit[0]).to.equal(false);
      //   expect(lockedAudit[1]).to.equal(false);
      //   expect(lockedAudit[2]).to.equal(false);
      //   expect(lockedAudit[3]).to.equal(false);
      //   expect(lockedAudit[4]).to.equal(false);
      //   expect(lockedAudit[5]).to.equal(true);
      //   expect(answer[0].name).to.equal("pack");
      //   expect(answer[1].name).to.equal("titans");
      //   expect(answer[2].name).to.equal("pats");
      //   expect(answer[3].name).to.equal("ravens");
      //   expect(answer[4].name).to.equal("bucs");
      //   expect(answer[5].name).to.equal("chiefs");
      //   expect(answer[0].rank).to.equal(6);
      //   expect(answer[1].rank).to.equal(5);
      //   expect(answer[2].rank).to.equal(4);
      //   expect(answer[3].rank).to.equal(3);
      //   expect(answer[4].rank).to.equal(2);
      //   expect(answer[5].rank).to.equal(1);
      // });
      // it("sorts 6 teams correctly, last team = locked & listed highest rank", () => {
      //   teams2Find = ["chiefs", "titans", "bucs", "ravens", "pack", "pats"];
      //   teams = teams.filter((team) => teams2Find.includes(team.name));
      //   teams = teams.map((team) => {
      //     if (team.name === "chiefs") team.spread = "6";
      //     if (team.name === "titans") team.spread = "5";
      //     if (team.name === "bucs") team.spread = "1";
      //     if (team.name === "ravens") team.spread = "1.5";
      //     if (team.name === "pack") team.spread = "10";
      //     if (team.name === "pats") {
      //       team.spread = "3";
      //       team.locked = true;
      //       team.rank = 6;
      //     }
      //     return team;
      //   });
      //   answer = sort(teams);
      //   lockedAudit = answer.map((user) => user.locked);
      //   expect(lockedAudit[0]).to.equal(true);
      //   expect(lockedAudit[1]).to.equal(false);
      //   expect(lockedAudit[2]).to.equal(false);
      //   expect(lockedAudit[3]).to.equal(false);
      //   expect(lockedAudit[4]).to.equal(false);
      //   expect(lockedAudit[5]).to.equal(false);
      //   expect(answer[0].name).to.equal("pats");
      //   expect(answer[1].name).to.equal("pack");
      //   expect(answer[2].name).to.equal("chiefs");
      //   expect(answer[3].name).to.equal("titans");
      //   expect(answer[4].name).to.equal("ravens");
      //   expect(answer[5].name).to.equal("bucs");
      //   expect(answer[0].rank).to.equal(6);
      //   expect(answer[1].rank).to.equal(5);
      //   expect(answer[2].rank).to.equal(4);
      //   expect(answer[3].rank).to.equal(3);
      //   expect(answer[4].rank).to.equal(2);
      //   expect(answer[5].rank).to.equal(1);
      // });
      // it("sorts 6 teams correctly, last team = locked & listed lowest rank", () => {
      //   teams2Find = ["chiefs", "titans", "bucs", "ravens", "pack", "pats"];
      //   teams = teams.filter((team) => teams2Find.includes(team.name));
      //   teams = teams.map((team) => {
      //     if (team.name === "chiefs") team.spread = "6";
      //     if (team.name === "titans") team.spread = "5";
      //     if (team.name === "bucs") team.spread = "1";
      //     if (team.name === "ravens") team.spread = "1.5";
      //     if (team.name === "pack") team.spread = "10";
      //     if (team.name === "pats") {
      //       team.spread = "3";
      //       team.locked = true;
      //       team.rank = 1;
      //     }
      //     return team;
      //   });
      //   answer = sort(teams);
      //   lockedAudit = answer.map((user) => user.locked);
      //   expect(lockedAudit[0]).to.equal(false);
      //   expect(lockedAudit[1]).to.equal(false);
      //   expect(lockedAudit[2]).to.equal(false);
      //   expect(lockedAudit[3]).to.equal(false);
      //   expect(lockedAudit[4]).to.equal(false);
      //   expect(lockedAudit[5]).to.equal(true);
      //   expect(answer[0].name).to.equal("pack");
      //   expect(answer[1].name).to.equal("chiefs");
      //   expect(answer[2].name).to.equal("titans");
      //   expect(answer[3].name).to.equal("ravens");
      //   expect(answer[4].name).to.equal("bucs");
      //   expect(answer[5].name).to.equal("pats");
      //   expect(answer[0].rank).to.equal(6);
      //   expect(answer[1].rank).to.equal(5);
      //   expect(answer[2].rank).to.equal(4);
      //   expect(answer[3].rank).to.equal(3);
      //   expect(answer[4].rank).to.equal(2);
      //   expect(answer[5].rank).to.equal(1);
      // });
      // it("sorts 10 teams correctly", () => {
      //   teams2Find = [
      //     "bills",
      //     "colts",
      //     "titans",
      //     "wash",
      //     "eagles",
      //     "browns",
      //     "ravens",
      //     "chargers",
      //     "pack",
      //     "rams",
      //   ];
      //   teams = teams.filter((team) => teams2Find.includes(team.name));
      //   teams = teams.map((team) => {
      //     if (team.name === "bills") team.spread = "5";
      //     if (team.name === "colts") team.spread = "7.5";
      //     if (team.name === "titans") {
      //       team.spread = "10";
      //       team.locked = true;
      //       team.rank = 8;
      //     }
      //     if (team.name === "wash") team.spread = "9";
      //     if (team.name === "eagles") team.spread = "14.5";
      //     if (team.name === "browns") {
      //       team.spread = "20";
      //       team.locked = true;
      //       team.rank = 3;
      //     }
      //     if (team.name === "ravens") team.spread = "11";
      //     if (team.name === "chargers") team.spread = "16";
      //     if (team.name === "pack") {
      //       team.spread = "6";
      //       team.locked = true;
      //       team.rank = 1;
      //     }
      //     if (team.name === "rams") team.spread = "1";
      //     return team;
      //   });
      //   answer = sort(teams);
      //   lockedAudit = answer.map((user) => user.locked);
      //   expect(lockedAudit[0]).to.equal(false);
      //   expect(lockedAudit[1]).to.equal(false);
      //   expect(lockedAudit[2]).to.equal(true);
      //   expect(lockedAudit[3]).to.equal(false);
      //   expect(lockedAudit[4]).to.equal(false);
      //   expect(lockedAudit[5]).to.equal(false);
      //   expect(lockedAudit[6]).to.equal(false);
      //   expect(lockedAudit[7]).to.equal(true);
      //   expect(lockedAudit[8]).to.equal(false);
      //   expect(lockedAudit[9]).to.equal(true);
      //   expect(answer[0].name).to.equal("chargers");
      //   expect(answer[1].name).to.equal("eagles");
      //   expect(answer[2].name).to.equal("titans");
      //   expect(answer[3].name).to.equal("ravens");
      //   expect(answer[4].name).to.equal("wash");
      //   expect(answer[5].name).to.equal("colts");
      //   expect(answer[6].name).to.equal("bills");
      //   expect(answer[7].name).to.equal("browns");
      //   expect(answer[8].name).to.equal("rams");
      //   expect(answer[9].name).to.equal("pack");
      //   expect(answer[0].rank).to.equal(10);
      //   expect(answer[1].rank).to.equal(9);
      //   expect(answer[2].rank).to.equal(8);
      //   expect(answer[3].rank).to.equal(7);
      //   expect(answer[4].rank).to.equal(6);
      //   expect(answer[5].rank).to.equal(5);
      //   expect(answer[6].rank).to.equal(4);
      //   expect(answer[7].rank).to.equal(3);
      //   expect(answer[8].rank).to.equal(2);
      //   expect(answer[9].rank).to.equal(1);
      // });
      // it("sorts 16 teams correctly", () => {
      //   teams = teams.map((team) => {
      //     if (team.name === "bills") team.spread = "1";
      //     if (team.name === "colts") team.spread = "9";
      //     if (team.name === "titans") team.spread = "4";
      //     if (team.name === "wash") team.spread = "5.5";
      //     if (team.name === "eagles") {
      //       team.spread = "10";
      //       team.locked = true;
      //       team.rank = 14;
      //     }
      //     if (team.name === "browns") team.spread = "1.5";
      //     if (team.name === "ravens") team.spread = "16";
      //     if (team.name === "chargers") team.spread = "15";
      //     if (team.name === "pack") team.spread = "12";
      //     if (team.name === "rams") team.spread = "12.5";
      //     if (team.name === "chiefs") team.spread = "7";
      //     if (team.name === "cards") team.spread = "14.5";
      //     if (team.name === "bucs") {
      //       team.spread = "20";
      //       team.locked = true;
      //       team.rank = 8;
      //     }
      //     if (team.name === "pats") team.spread = "6";
      //     if (team.name === "saints") team.spread = "13";
      //     if (team.name === "vikings") team.spread = "13.5";
      //     return team;
      //   });
      //   answer = sort(teams);
      //   lockedAudit = answer.map((user) => user.locked);
      //   expect(lockedAudit[0]).to.equal(false);
      //   expect(lockedAudit[1]).to.equal(false);
      //   expect(lockedAudit[2]).to.equal(true);
      //   expect(lockedAudit[3]).to.equal(false);
      //   expect(lockedAudit[4]).to.equal(false);
      //   expect(lockedAudit[5]).to.equal(false);
      //   expect(lockedAudit[6]).to.equal(false);
      //   expect(lockedAudit[7]).to.equal(false);
      //   expect(lockedAudit[8]).to.equal(true);
      //   expect(lockedAudit[9]).to.equal(false);
      //   expect(lockedAudit[10]).to.equal(false);
      //   expect(lockedAudit[11]).to.equal(false);
      //   expect(lockedAudit[12]).to.equal(false);
      //   expect(lockedAudit[13]).to.equal(false);
      //   expect(lockedAudit[14]).to.equal(false);
      //   expect(lockedAudit[15]).to.equal(false);
      //   expect(answer[0].name).to.equal("ravens");
      //   expect(answer[1].name).to.equal("chargers");
      //   expect(answer[2].name).to.equal("eagles");
      //   expect(answer[3].name).to.equal("cards");
      //   expect(answer[4].name).to.equal("vikings");
      //   expect(answer[5].name).to.equal("saints");
      //   expect(answer[6].name).to.equal("rams");
      //   expect(answer[7].name).to.equal("pack");
      //   expect(answer[8].name).to.equal("bucs");
      //   expect(answer[9].name).to.equal("colts");
      //   expect(answer[10].name).to.equal("chiefs");
      //   expect(answer[11].name).to.equal("pats");
      //   expect(answer[12].name).to.equal("wash");
      //   expect(answer[13].name).to.equal("titans");
      //   expect(answer[14].name).to.equal("browns");
      //   expect(answer[15].name).to.equal("bills");
      //   expect(answer[0].rank).to.equal(16);
      //   expect(answer[1].rank).to.equal(15);
      //   expect(answer[2].rank).to.equal(14);
      //   expect(answer[3].rank).to.equal(13);
      //   expect(answer[4].rank).to.equal(12);
      //   expect(answer[5].rank).to.equal(11);
      //   expect(answer[6].rank).to.equal(10);
      //   expect(answer[7].rank).to.equal(9);
      //   expect(answer[8].rank).to.equal(8);
      //   expect(answer[9].rank).to.equal(7);
      //   expect(answer[10].rank).to.equal(6);
      //   expect(answer[11].rank).to.equal(5);
      //   expect(answer[12].rank).to.equal(4);
      //   expect(answer[13].rank).to.equal(3);
      //   expect(answer[14].rank).to.equal(2);
      //   expect(answer[15].rank).to.equal(1);
      // });
    });

    // describe("w/ dupe spreads", () => {
    //   describe("sorts 3 teams correctly", () => {
    //     beforeEach(() => {
    //       teams2Find = ["bills", "colts", "titans"];

    //       teams = teams.filter((team) => teams2Find.includes(team.name));
    //     });

    //     it("dupe spreads are locked", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "8";

    //         if (team.name === "colts") {
    //           team.spread = "7";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "titans") {
    //           team.spread = "7";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["colts", "titans"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(true);

    //       expect(answer[0].name).to.equal("bills");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("titans");

    //       expect(answer[0].rank).to.equal(3);
    //       expect(answer[1].rank).to.equal(2);
    //       expect(answer[2].rank).to.equal(1);
    //     });

    //     it("dupe spreads are not locked, locked spread is not in between, locked is ranked last", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "8";
    //         if (team.name === "titans") team.spread = "8";

    //         if (team.name === "colts") {
    //           team.spread = "7";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "titans"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);

    //       expect(teams2Audit.includes(answer[0].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(answer[2].name).to.equal("colts");

    //       expect(answer[0].rank).to.equal(3);
    //       expect(answer[1].rank).to.equal(2);
    //       expect(answer[2].rank).to.equal(1);
    //     });

    //     it("dupe spreads are not locked, locked spread is not in between, locked is ranked first", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "8";
    //         if (team.name === "titans") team.spread = "8";

    //         if (team.name === "colts") {
    //           team.spread = "7";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "titans"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(true);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);

    //       expect(answer[0].name).to.equal("colts");
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);

    //       expect(answer[0].rank).to.equal(3);
    //       expect(answer[1].rank).to.equal(2);
    //       expect(answer[2].rank).to.equal(1);
    //     });

    //     it("dupe spreads are not locked, locked spread is in between, locked is ranked last", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "8";

    //         if (team.name === "colts") {
    //           team.spread = "7";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         if (team.name === "titans") team.spread = "8";

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "titans"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);

    //       expect(teams2Audit.includes(answer[0].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(answer[2].name).to.equal("colts");

    //       expect(answer[0].rank).to.equal(3);
    //       expect(answer[1].rank).to.equal(2);
    //       expect(answer[2].rank).to.equal(1);
    //     });

    //     it("dupe spreads are not locked, locked spread is in between, locked is ranked first", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "8";

    //         if (team.name === "colts") {
    //           team.spread = "7";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "titans") team.spread = "8";

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "titans"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(true);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);

    //       expect(answer[0].name).to.equal("colts");
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);

    //       expect(answer[0].rank).to.equal(3);
    //       expect(answer[1].rank).to.equal(2);
    //       expect(answer[2].rank).to.equal(1);
    //     });
    //   });

    //   describe("sorts 5 teams correctly", () => {
    //     beforeEach(() => {
    //       teams2Find = ["bills", "colts", "titans", "pack", "ravens"];

    //       teams = teams.filter((team) => teams2Find.includes(team.name));
    //     });

    //     it("dupe spreads are locked", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "7.5";

    //         if (team.name === "colts") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "titans") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         if (team.name === "pack") team.spread = "10";
    //         if (team.name === "ravens") team.spread = "6";

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["colts", "titans"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);

    //       expect(answer[0].name).to.equal("pack");
    //       expect(answer[1].name).to.equal("bills");
    //       expect(answer[2].name).to.equal("colts");
    //       expect(answer[3].name).to.equal("ravens");
    //       expect(answer[4].name).to.equal("titans");

    //       expect(answer[0].rank).to.equal(5);
    //       expect(answer[1].rank).to.equal(4);
    //       expect(answer[2].rank).to.equal(3);
    //       expect(answer[3].rank).to.equal(2);
    //       expect(answer[4].rank).to.equal(1);
    //     });

    //     it("dupe spreads are not locked, locked spread is not in between, locked is ranked last", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         if (team.name === "colts") team.spread = "7.5";
    //         if (team.name === "titans") team.spread = "7.5";

    //         if (team.name === "pack") team.spread = "10";
    //         if (team.name === "ravens") team.spread = "10";

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["colts", "titans", "pack", "ravens"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);

    //       expect(teams2Audit.includes(answer[0].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("bills");

    //       expect(answer[0].rank).to.equal(5);
    //       expect(answer[1].rank).to.equal(4);
    //       expect(answer[2].rank).to.equal(3);
    //       expect(answer[3].rank).to.equal(2);
    //       expect(answer[4].rank).to.equal(1);
    //     });

    //     it("dupe spreads are not locked, locked spread is not in between, locked is ranked first", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 5;
    //         }

    //         if (team.name === "colts") team.spread = "7";
    //         if (team.name === "titans") team.spread = "7.5";

    //         if (team.name === "pack") team.spread = "10";
    //         if (team.name === "ravens") team.spread = "10";

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["pack", "ravens"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(true);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);

    //       expect(answer[0].name).to.equal("bills");
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(answer[3].name).to.equal("titans");
    //       expect(answer[4].name).to.equal("colts");

    //       expect(answer[0].rank).to.equal(5);
    //       expect(answer[1].rank).to.equal(4);
    //       expect(answer[2].rank).to.equal(3);
    //       expect(answer[3].rank).to.equal(2);
    //       expect(answer[4].rank).to.equal(1);
    //     });

    //     it("dupe spreads are not locked, locked spread is in between", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "16";

    //         if (team.name === "colts") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "titans") team.spread = "13.5";
    //         if (team.name === "pack") team.spread = "10";
    //         if (team.name === "ravens") team.spread = "10";

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["pack", "ravens"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(true);
    //       expect(lockedAudit[4]).to.equal(false);

    //       expect(answer[0].name).to.equal("bills");
    //       expect(answer[1].name).to.equal("titans");
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(answer[3].name).to.equal("colts");
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);

    //       expect(answer[0].rank).to.equal(5);
    //       expect(answer[1].rank).to.equal(4);
    //       expect(answer[2].rank).to.equal(3);
    //       expect(answer[3].rank).to.equal(2);
    //       expect(answer[4].rank).to.equal(1);
    //     });

    //     {
    //     }

    //     it("dupe spreads are not locked, locked spread is in between", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "16";
    //         if (team.name === "colts") team.spread = "10";
    //         if (team.name === "titans") team.spread = "16";

    //         if (team.name === "pack") {
    //           team.spread = "16";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         if (team.name === "ravens") team.spread = "13.5";

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["titans", "bills"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);

    //       expect(teams2Audit.includes(answer[0].name)).to.equal(true);
    //       expect(answer[1].name).to.equal("pack");
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(answer[3].name).to.equal("ravens");
    //       expect(answer[4].name).to.equal("colts");

    //       expect(answer[0].rank).to.equal(5);
    //       expect(answer[1].rank).to.equal(4);
    //       expect(answer[2].rank).to.equal(3);
    //       expect(answer[3].rank).to.equal(2);
    //       expect(answer[4].rank).to.equal(1);
    //     });
    //   });

    //   describe("sorts 10 teams correctly", () => {
    //     beforeEach(() => {
    //       teams2Find = [
    //         "bills",
    //         "colts",
    //         "titans",
    //         "wash",
    //         "eagles",
    //         "browns",
    //         "ravens",
    //         "chargers",
    //         "pack",
    //         "rams",
    //       ];

    //       teams = teams.filter((team) => teams2Find.includes(team.name));
    //     });

    //     it("2+ locked w/ 1 same spread, locks are in sequetial order, no dupes in non-locked - a non locked team has the same spread as the locked upe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "16"; //10
    //         if (team.name === "colts") team.spread = "14.5"; //8

    //         if (team.name === "titans") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "15"; //9
    //         if (team.name === "eagles") team.spread = "9"; //5
    //         if (team.name === "browns") team.spread = "8.5"; //2

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         if (team.name === "chargers") team.spread = "12"; //7
    //         if (team.name === "pack") team.spread = "2"; //1
    //         if (team.name === "rams") team.spread = "10"; //6

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("bills");
    //       expect(answer[1].name).to.equal("wash");
    //       expect(answer[2].name).to.equal("colts");
    //       expect(answer[3].name).to.equal("chargers");
    //       expect(answer[4].name).to.equal("rams");
    //       expect(answer[5].name).to.equal("eagles");
    //       expect(answer[6].name).to.equal("ravens");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("browns");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ 1 same spread, locks are in sequetial order, no dupes in non-locked - no non locked team has the same spread as the locked upe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "16"; //10
    //         if (team.name === "colts") team.spread = "14.5"; //8

    //         if (team.name === "titans") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "15"; //9
    //         if (team.name === "eagles") team.spread = "9"; //5
    //         if (team.name === "browns") team.spread = "8.5"; //2

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         if (team.name === "chargers") team.spread = "12"; //7
    //         if (team.name === "pack") team.spread = "2"; //1
    //         if (team.name === "rams") team.spread = "3"; //6

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("bills");
    //       expect(answer[1].name).to.equal("wash");
    //       expect(answer[2].name).to.equal("colts");
    //       expect(answer[3].name).to.equal("chargers");
    //       expect(answer[4].name).to.equal("eagles");
    //       expect(answer[5].name).to.equal("browns");
    //       expect(answer[6].name).to.equal("ravens");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("rams");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are in sequetial order, no dupes in non-locked, a non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "16"; //10
    //         if (team.name === "colts") team.spread = "14.5"; //6

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "15"; //9

    //         if (team.name === "eagles") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 8;
    //         }
    //         if (team.name === "browns") team.spread = "4.4"; //4

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 7;
    //         }

    //         if (team.name === "chargers") team.spread = "10"; //5

    //         if (team.name === "pack") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(true);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("bills");
    //       expect(answer[1].name).to.equal("wash");
    //       expect(answer[2].name).to.equal("eagles");
    //       expect(answer[3].name).to.equal("ravens");
    //       expect(answer[4].name).to.equal("colts");
    //       expect(answer[5].name).to.equal("chargers");
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("pack");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are in sequetial order, no dupes in non-locked, no non locked team has the same spread as the lockedd upe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "16"; //10
    //         if (team.name === "colts") team.spread = "14.5"; //6

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "15"; //9

    //         if (team.name === "eagles") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 8;
    //         }
    //         if (team.name === "browns") team.spread = "4.4"; //4

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 7;
    //         }

    //         if (team.name === "chargers") team.spread = "12"; //5

    //         if (team.name === "pack") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(true);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("bills");
    //       expect(answer[1].name).to.equal("wash");
    //       expect(answer[2].name).to.equal("eagles");
    //       expect(answer[3].name).to.equal("ravens");
    //       expect(answer[4].name).to.equal("colts");
    //       expect(answer[5].name).to.equal("chargers");
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("pack");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ 1 same spread, locks are NOT in sequetial order, no dupes in non-locked, a non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "5"; //5
    //         if (team.name === "colts") team.spread = "14.5"; //8

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "15"; //9
    //         if (team.name === "eagles") team.spread = "11"; //6
    //         if (team.name === "browns") team.spread = "4.5"; //4
    //         if (team.name === "ravens") team.spread = "4"; //2
    //         if (team.name === "chargers") team.spread = "12"; //7

    //         if (team.name === "pack") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 10;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(true);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("pack");
    //       expect(answer[1].name).to.equal("wash");
    //       expect(answer[2].name).to.equal("colts");
    //       expect(answer[3].name).to.equal("chargers");
    //       expect(answer[4].name).to.equal("eagles");
    //       expect(answer[5].name).to.equal("bills");
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("ravens");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ 1 same spread, locks are NOT in sequetial order, no dupes in non-locked, no non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11.5"; //5
    //         if (team.name === "colts") team.spread = "14.5"; //8

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "15"; //9
    //         if (team.name === "eagles") team.spread = "11"; //6
    //         if (team.name === "browns") team.spread = "4.5"; //4
    //         if (team.name === "ravens") team.spread = "4"; //2
    //         if (team.name === "chargers") team.spread = "12"; //7

    //         if (team.name === "pack") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 10;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(true);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("pack");
    //       expect(answer[1].name).to.equal("wash");
    //       expect(answer[2].name).to.equal("colts");
    //       expect(answer[3].name).to.equal("chargers");
    //       expect(answer[4].name).to.equal("bills");
    //       expect(answer[5].name).to.equal("eagles");
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("ravens");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are NOT in sequetial order, a dupes in non-locked, a non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //7 and 6
    //         if (team.name === "colts") team.spread = "14.5"; //9

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "11"; //7 and 6

    //         if (team.name === "eagles") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 10;
    //         }

    //         if (team.name === "browns") team.spread = "8"; //5
    //         if (team.name === "ravens") team.spread = "4"; //4

    //         if (team.name === "chargers") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "pack") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //2

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["wash", "bills"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(true);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(answer[0].name).to.equal("eagles");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("chargers");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(answer[5].name).to.equal("browns");
    //       expect(answer[6].name).to.equal("ravens");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("rams");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are NOT in sequetial order, a dupes in non-locked, no non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //7 and 6
    //         if (team.name === "colts") team.spread = "14.5"; //9

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "11"; //7 and 6

    //         if (team.name === "eagles") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 10;
    //         }

    //         if (team.name === "browns") team.spread = "3.5"; //5
    //         if (team.name === "ravens") team.spread = "4"; //4

    //         if (team.name === "chargers") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "pack") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //2

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["wash", "bills"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(true);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(answer[0].name).to.equal("eagles");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("chargers");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(answer[5].name).to.equal("ravens");
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("rams");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are NOT in sequetial order, no dupes in non-locked, a non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //8
    //         if (team.name === "colts") team.spread = "14.5"; //9

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "5"; //6

    //         if (team.name === "eagles") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 10;
    //         }

    //         if (team.name === "browns") team.spread = "8"; //7
    //         if (team.name === "ravens") team.spread = "4"; //4

    //         if (team.name === "chargers") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 5;
    //         }

    //         if (team.name === "pack") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //2

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(true);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(true);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(answer[0].name).to.equal("eagles");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("bills");
    //       expect(answer[3].name).to.equal("browns");
    //       expect(answer[4].name).to.equal("wash");
    //       expect(answer[5].name).to.equal("chargers");
    //       expect(answer[6].name).to.equal("ravens");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("rams");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are NOT in sequetial order, no dupes in non-locked, no non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //8
    //         if (team.name === "colts") team.spread = "14.5"; //9

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "5"; //7

    //         if (team.name === "eagles") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 10;
    //         }

    //         if (team.name === "browns") team.spread = "1"; //2
    //         if (team.name === "ravens") team.spread = "4"; //6

    //         if (team.name === "chargers") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 5;
    //         }

    //         if (team.name === "pack") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //4

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(true);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(true);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(answer[0].name).to.equal("eagles");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("bills");
    //       expect(answer[3].name).to.equal("wash");
    //       expect(answer[4].name).to.equal("ravens");
    //       expect(answer[5].name).to.equal("chargers");
    //       expect(answer[6].name).to.equal("rams");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("browns");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ 1 same spread, no dupes in locked, a non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //7-5-4
    //         if (team.name === "colts") team.spread = "14.5"; //10
    //         if (team.name === "titans") team.spread = "12"; //8
    //         if (team.name === "wash") team.spread = "11"; //7-5-4

    //         if (team.name === "eagles") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "browns") team.spread = "11"; //7-5-4
    //         if (team.name === "ravens") team.spread = "9"; //3
    //         if (team.name === "chargers") team.spread = "5"; //2
    //         if (team.name === "pack") team.spread = "13"; //9
    //         if (team.name === "rams") team.spread = "3"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "wash", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("colts");
    //       expect(answer[1].name).to.equal("pack");
    //       expect(answer[2].name).to.equal("titans");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(answer[7].name).to.equal("ravens");
    //       expect(answer[8].name).to.equal("chargers");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ 1 same spread, no dupes in locked, no non locked team has the same spread as the locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //7-5-4
    //         if (team.name === "colts") team.spread = "14.5"; //10
    //         if (team.name === "titans") team.spread = "12"; //8
    //         if (team.name === "wash") team.spread = "11"; //7-5-4

    //         if (team.name === "eagles") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "browns") team.spread = "11"; //7-5-4
    //         if (team.name === "ravens") team.spread = "9"; //3
    //         if (team.name === "chargers") team.spread = "9.5"; //2
    //         if (team.name === "pack") team.spread = "13"; //9
    //         if (team.name === "rams") team.spread = "3"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "wash", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("colts");
    //       expect(answer[1].name).to.equal("pack");
    //       expect(answer[2].name).to.equal("titans");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(answer[7].name).to.equal("chargers");
    //       expect(answer[8].name).to.equal("ravens");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ same spread for 2 diff spreads, no dupes in locked, a non locked team has the same spread as the locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //8-7-5
    //         if (team.name === "colts") team.spread = "14.5"; //10
    //         if (team.name === "titans") team.spread = "12"; //9
    //         if (team.name === "wash") team.spread = "11"; //8-7-5

    //         if (team.name === "eagles") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "browns") team.spread = "11"; //8-7-5
    //         if (team.name === "ravens") team.spread = "9"; //3-2
    //         if (team.name === "chargers") team.spread = "9"; //3-2
    //         if (team.name === "pack") team.spread = "2"; //1
    //         if (team.name === "rams") team.spread = "10"; //4

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "wash", "browns", "ravens", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("colts");
    //       expect(answer[1].name).to.equal("titans");
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(answer[6].name).to.equal("rams");
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[8].name)).to.equal(true);
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ same spread for 2 diff spreads, no dupes in locked, no non locked team has the same spread as the locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //8-7-5
    //         if (team.name === "colts") team.spread = "14.5"; //10
    //         if (team.name === "titans") team.spread = "12"; //9
    //         if (team.name === "wash") team.spread = "11"; //8-7-5

    //         if (team.name === "eagles") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "browns") team.spread = "11"; //8-7-5
    //         if (team.name === "ravens") team.spread = "9"; //4-3
    //         if (team.name === "chargers") team.spread = "9"; //4-3
    //         if (team.name === "pack") team.spread = "2"; //2
    //         if (team.name === "rams") team.spread = "3"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "wash", "browns", "ravens", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("colts");
    //       expect(answer[1].name).to.equal("titans");
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(answer[8].name).to.equal("rams");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ 1 same spread, no dupes in locked, a non locked team has the same spread as the locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //7-6
    //         if (team.name === "colts") team.spread = "14.5"; //10
    //         if (team.name === "titans") team.spread = "12"; //9
    //         if (team.name === "wash") team.spread = "11.5"; //8

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "browns") team.spread = "8.5"; //4
    //         if (team.name === "ravens") team.spread = "9"; //5
    //         if (team.name === "chargers") team.spread = "11"; //7-6
    //         if (team.name === "pack") team.spread = "2"; //1
    //         if (team.name === "rams") team.spread = "3"; //3

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("colts");
    //       expect(answer[1].name).to.equal("titans");
    //       expect(answer[2].name).to.equal("wash");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(answer[5].name).to.equal("ravens");
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("rams");
    //       expect(answer[8].name).to.equal("eagles");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ 1 same spread, no dupes in locked, no non locked team has the same spread as the locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //7-6
    //         if (team.name === "colts") team.spread = "14.5"; //10
    //         if (team.name === "titans") team.spread = "12"; //9
    //         if (team.name === "wash") team.spread = "11.5"; //8

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "browns") team.spread = "8"; //4
    //         if (team.name === "ravens") team.spread = "9"; //5
    //         if (team.name === "chargers") team.spread = "11"; //7-6
    //         if (team.name === "pack") team.spread = "2"; //1
    //         if (team.name === "rams") team.spread = "3"; //3

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("colts");
    //       expect(answer[1].name).to.equal("titans");
    //       expect(answer[2].name).to.equal("wash");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(answer[5].name).to.equal("ravens");
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("rams");
    //       expect(answer[8].name).to.equal("eagles");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ same spread for 2 diff spreads, no dupes in locked, a non locked team has the same spread as the locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "16"; //10-9-8
    //         if (team.name === "colts") team.spread = "1.5"; //1
    //         if (team.name === "titans") team.spread = "16"; //10-9-8
    //         if (team.name === "wash") team.spread = "8.5"; //6-5

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "browns") team.spread = "8"; //4
    //         if (team.name === "ravens") team.spread = "9"; //7
    //         if (team.name === "chargers") team.spread = "8.5"; //6-5
    //         if (team.name === "pack") team.spread = "2"; //3
    //         if (team.name === "rams") team.spread = "16"; //10-9-8

    //         return team;
    //       });

    //       answer = sort(teams);

    //       //bills, titans, rams   -- wash, chargers

    //       teams2Audit = ["bills", "titans", "rams", "chargers", "wash"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(teams2Audit.includes(answer[0].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(answer[3].name).to.equal("ravens");
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("pack");
    //       expect(answer[8].name).to.equal("eagles");
    //       expect(answer[9].name).to.equal("colts");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ same spread for 2 diff spreads, no non locked team has the same spread as the locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "16"; //10-9-7
    //         if (team.name === "colts") team.spread = "1.5"; //1
    //         if (team.name === "titans") team.spread = "16"; //10-9-7
    //         if (team.name === "wash") team.spread = "7"; //4-3

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "browns") team.spread = "8"; //5
    //         if (team.name === "ravens") team.spread = "9"; //6
    //         if (team.name === "chargers") team.spread = "7"; //4-3
    //         if (team.name === "pack") team.spread = "2"; //2
    //         if (team.name === "rams") team.spread = "16"; //10-9-7

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "titans", "rams", "chargers", "wash"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(teams2Audit.includes(answer[0].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(answer[2].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("ravens");
    //       expect(answer[5].name).to.equal("browns");
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(answer[8].name).to.equal("pack");
    //       expect(answer[9].name).to.equal("colts");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ 1 same spread, locks are in sequetial order, dupes for non-locked too, non locked teams have the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "4"; //2

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 7;
    //         }

    //         if (team.name === "titans") team.spread = "16"; //10
    //         if (team.name === "wash") team.spread = "7"; //3

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "browns") team.spread = "8.5"; //9-5

    //         if (team.name === "ravens") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "chargers") team.spread = "7.5"; //4
    //         if (team.name === "pack") team.spread = "8.5"; //9-5
    //         if (team.name === "rams") team.spread = "1"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["pack", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(true);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("titans");
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(answer[2].name).to.equal("ravens");
    //       expect(answer[3].name).to.equal("colts");
    //       expect(answer[4].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(answer[6].name).to.equal("chargers");
    //       expect(answer[7].name).to.equal("wash");
    //       expect(answer[8].name).to.equal("bills");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ 1 same spread, locks are in sequetial order, dupes for non-locked too, non locked teams have diff dupe spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "4"; //5

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "titans") team.spread = "16"; //10
    //         if (team.name === "wash") team.spread = "7"; //6

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         if (team.name === "browns") team.spread = "15"; //9-8

    //         if (team.name === "ravens") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "chargers") team.spread = "7.5"; //7
    //         if (team.name === "pack") team.spread = "15"; //9-8
    //         if (team.name === "rams") team.spread = "1"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["pack", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("titans");
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(answer[3].name).to.equal("chargers");
    //       expect(answer[4].name).to.equal("wash");
    //       expect(answer[5].name).to.equal("bills");
    //       expect(answer[6].name).to.equal("eagles");
    //       expect(answer[7].name).to.equal("colts");
    //       expect(answer[8].name).to.equal("ravens");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ 1 same spread, locks are NOT sequetial order, dupes for non-locked too, non locked teams have the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "4"; //3

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 9;
    //         }

    //         if (team.name === "titans") team.spread = "8.5"; //8-7
    //         if (team.name === "wash") team.spread = "7"; //5

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         if (team.name === "browns") team.spread = "8.5"; //8-7

    //         if (team.name === "ravens") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         if (team.name === "chargers") team.spread = "7.5"; //6
    //         if (team.name === "pack") team.spread = "15"; //10
    //         if (team.name === "rams") team.spread = "1"; //2

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["titans", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(answer[0].name).to.equal("pack");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("chargers");
    //       expect(answer[5].name).to.equal("wash");
    //       expect(answer[6].name).to.equal("eagles");
    //       expect(answer[7].name).to.equal("bills");
    //       expect(answer[8].name).to.equal("rams");
    //       expect(answer[9].name).to.equal("ravens");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ 1 same spread, locks are NOT sequetial order, dupes for non-locked too, non locked teams have diff spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "4"; //3

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 9;
    //         }

    //         if (team.name === "titans") team.spread = "6"; //6-5
    //         if (team.name === "wash") team.spread = "7"; //8

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         if (team.name === "browns") team.spread = "6"; //6-5

    //         if (team.name === "ravens") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         if (team.name === "chargers") team.spread = "7.5"; //7
    //         if (team.name === "pack") team.spread = "15"; //10
    //         if (team.name === "rams") team.spread = "1"; //2

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["titans", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(answer[0].name).to.equal("pack");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("chargers");
    //       expect(answer[3].name).to.equal("wash");
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(answer[6].name).to.equal("eagles");
    //       expect(answer[7].name).to.equal("bills");
    //       expect(answer[8].name).to.equal("rams");
    //       expect(answer[9].name).to.equal("ravens");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are in NOT sequetial order, dupes for non-locked too, non locked teams have the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "4"; //2

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 9;
    //         }

    //         if (team.name === "titans") team.spread = "8.5"; //7-5
    //         if (team.name === "wash") team.spread = "11"; //8

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         if (team.name === "browns") team.spread = "8.5"; //7-5

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "chargers") team.spread = "7.5"; //3
    //         if (team.name === "pack") team.spread = "15"; //10

    //         if (team.name === "rams") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["titans", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(answer[0].name).to.equal("pack");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("wash");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("ravens");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(answer[6].name).to.equal("eagles");
    //       expect(answer[7].name).to.equal("chargers");
    //       expect(answer[8].name).to.equal("bills");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are in NOT sequetial order, dupes for non-locked too, non locked teams have diff spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "4"; //2

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 9;
    //         }

    //         if (team.name === "titans") team.spread = "16"; //10-8
    //         if (team.name === "wash") team.spread = "11"; //5

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         if (team.name === "browns") team.spread = "16"; //10-8

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "chargers") team.spread = "7.5"; //3
    //         if (team.name === "pack") team.spread = "15"; //7

    //         if (team.name === "rams") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["titans", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(teams2Audit.includes(answer[0].name)).to.equal(true);
    //       expect(answer[1].name).to.equal("colts");
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(answer[3].name).to.equal("pack");
    //       expect(answer[4].name).to.equal("ravens");
    //       expect(answer[5].name).to.equal("wash");
    //       expect(answer[6].name).to.equal("eagles");
    //       expect(answer[7].name).to.equal("chargers");
    //       expect(answer[8].name).to.equal("bills");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are in sequetial order, dupes for non-locked too, non locked teams have the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "8.5"; //2-1

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 9;
    //         }

    //         if (team.name === "titans") team.spread = "16"; //10
    //         if (team.name === "wash") team.spread = "11"; //7

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "browns") team.spread = "8.5"; //2-1

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 5;
    //         }

    //         if (team.name === "chargers") team.spread = "10"; //6-3
    //         if (team.name === "pack") team.spread = "10"; //6-3

    //         if (team.name === "rams") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "browns", "pack", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(true);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("titans");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("eagles");
    //       expect(answer[3].name).to.equal("wash");
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(answer[5].name).to.equal("ravens");
    //       expect(answer[6].name).to.equal("rams");
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[8].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[9].name)).to.equal(true);

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are in sequetial order, dupes for non-locked too, non locked teams have diff spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "14"; //10

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 9;
    //         }

    //         if (team.name === "titans") team.spread = "11"; //7-6
    //         if (team.name === "wash") team.spread = "11"; //7-6

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "browns") team.spread = "8"; //3

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 5;
    //         }

    //         if (team.name === "chargers") team.spread = "1"; //2-1
    //         if (team.name === "pack") team.spread = "1"; //2-1

    //         if (team.name === "rams") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["titans", "wash", "pack", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(true);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("bills");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(answer[5].name).to.equal("ravens");
    //       expect(answer[6].name).to.equal("rams");
    //       expect(answer[7].name).to.equal("browns");
    //       expect(teams2Audit.includes(answer[8].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[9].name)).to.equal(true);

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are NOT in sequetial order, dupes for non-locked too, non locked teams have the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "8.5"; //5-3

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "titans") team.spread = "8.5"; //5-3
    //         if (team.name === "wash") team.spread = "11"; //10

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "browns") team.spread = "10"; //9-7

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "chargers") team.spread = "10"; //9-7
    //         if (team.name === "pack") team.spread = "1"; //1

    //         if (team.name === "rams") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["titans", "bills", "browns", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("wash");
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(answer[2].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("ravens");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(answer[6].name).to.equal("rams");
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(answer[8].name).to.equal("colts");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are NOT in sequetial order, dupes for non-locked too, non locked teams have diff spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "8.5";

    //         if (team.name === "colts") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "titans") team.spread = "8.5";
    //         if (team.name === "wash") team.spread = "11";

    //         if (team.name === "eagles") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "browns") team.spread = "10";

    //         if (team.name === "ravens") {
    //           team.spread = "4";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "chargers") team.spread = "10";
    //         if (team.name === "pack") team.spread = "1";

    //         if (team.name === "rams") {
    //           team.spread = "4";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["titans", "bills", "browns", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("wash");
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(answer[2].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("ravens");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(answer[6].name).to.equal("rams");
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(answer[8].name).to.equal("colts");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });
    //   });

    //   describe("sorts 10 teams correctly", () => {
    //     beforeEach(() => {
    //       teams2Find = [
    //         "bills",
    //         "colts",
    //         "titans",
    //         "wash",
    //         "eagles",
    //         "browns",
    //         "ravens",
    //         "chargers",
    //         "pack",
    //         "rams",
    //       ];

    //       teams = teams.filter((team) => teams2Find.includes(team.name));
    //     });

    //     it("2+ locked w/ 1 same spread, locks are in sequetial order, no dupes in non-locked - a non locked team has the same spread as the locked upe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "16"; //10
    //         if (team.name === "colts") team.spread = "14.5"; //8

    //         if (team.name === "titans") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "15"; //9
    //         if (team.name === "eagles") team.spread = "9"; //5
    //         if (team.name === "browns") team.spread = "8.5"; //2

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         if (team.name === "chargers") team.spread = "12"; //7
    //         if (team.name === "pack") team.spread = "2"; //1
    //         if (team.name === "rams") team.spread = "10"; //6

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("bills");
    //       expect(answer[1].name).to.equal("wash");
    //       expect(answer[2].name).to.equal("colts");
    //       expect(answer[3].name).to.equal("chargers");
    //       expect(answer[4].name).to.equal("rams");
    //       expect(answer[5].name).to.equal("eagles");
    //       expect(answer[6].name).to.equal("ravens");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("browns");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ 1 same spread, locks are in sequetial order, no dupes in non-locked - no non locked team has the same spread as the locked upe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "16"; //10
    //         if (team.name === "colts") team.spread = "14.5"; //8

    //         if (team.name === "titans") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "15"; //9
    //         if (team.name === "eagles") team.spread = "9"; //5
    //         if (team.name === "browns") team.spread = "8.5"; //2

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         if (team.name === "chargers") team.spread = "12"; //7
    //         if (team.name === "pack") team.spread = "2"; //1
    //         if (team.name === "rams") team.spread = "3"; //6

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("bills");
    //       expect(answer[1].name).to.equal("wash");
    //       expect(answer[2].name).to.equal("colts");
    //       expect(answer[3].name).to.equal("chargers");
    //       expect(answer[4].name).to.equal("eagles");
    //       expect(answer[5].name).to.equal("browns");
    //       expect(answer[6].name).to.equal("ravens");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("rams");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are in sequetial order, no dupes in non-locked, a non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "16"; //10
    //         if (team.name === "colts") team.spread = "14.5"; //6

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "15"; //9

    //         if (team.name === "eagles") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 8;
    //         }
    //         if (team.name === "browns") team.spread = "4.4"; //4

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 7;
    //         }

    //         if (team.name === "chargers") team.spread = "10"; //5

    //         if (team.name === "pack") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(true);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("bills");
    //       expect(answer[1].name).to.equal("wash");
    //       expect(answer[2].name).to.equal("eagles");
    //       expect(answer[3].name).to.equal("ravens");
    //       expect(answer[4].name).to.equal("colts");
    //       expect(answer[5].name).to.equal("chargers");
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("pack");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are in sequetial order, no dupes in non-locked, no non locked team has the same spread as the lockedd upe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "16"; //10
    //         if (team.name === "colts") team.spread = "14.5"; //6

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "15"; //9

    //         if (team.name === "eagles") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 8;
    //         }
    //         if (team.name === "browns") team.spread = "4.4"; //4

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 7;
    //         }

    //         if (team.name === "chargers") team.spread = "12"; //5

    //         if (team.name === "pack") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(true);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("bills");
    //       expect(answer[1].name).to.equal("wash");
    //       expect(answer[2].name).to.equal("eagles");
    //       expect(answer[3].name).to.equal("ravens");
    //       expect(answer[4].name).to.equal("colts");
    //       expect(answer[5].name).to.equal("chargers");
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("pack");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ 1 same spread, locks are NOT in sequetial order, no dupes in non-locked, a non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "5"; //5
    //         if (team.name === "colts") team.spread = "14.5"; //8

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "15"; //9
    //         if (team.name === "eagles") team.spread = "11"; //6
    //         if (team.name === "browns") team.spread = "4.5"; //4
    //         if (team.name === "ravens") team.spread = "4"; //2
    //         if (team.name === "chargers") team.spread = "12"; //7

    //         if (team.name === "pack") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 10;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(true);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("pack");
    //       expect(answer[1].name).to.equal("wash");
    //       expect(answer[2].name).to.equal("colts");
    //       expect(answer[3].name).to.equal("chargers");
    //       expect(answer[4].name).to.equal("eagles");
    //       expect(answer[5].name).to.equal("bills");
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("ravens");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ 1 same spread, locks are NOT in sequetial order, no dupes in non-locked, no non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11.5"; //5
    //         if (team.name === "colts") team.spread = "14.5"; //8

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "15"; //9
    //         if (team.name === "eagles") team.spread = "11"; //6
    //         if (team.name === "browns") team.spread = "4.5"; //4
    //         if (team.name === "ravens") team.spread = "4"; //2
    //         if (team.name === "chargers") team.spread = "12"; //7

    //         if (team.name === "pack") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 10;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(true);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("pack");
    //       expect(answer[1].name).to.equal("wash");
    //       expect(answer[2].name).to.equal("colts");
    //       expect(answer[3].name).to.equal("chargers");
    //       expect(answer[4].name).to.equal("bills");
    //       expect(answer[5].name).to.equal("eagles");
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("ravens");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are NOT in sequetial order, a dupes in non-locked, a non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //7 and 6
    //         if (team.name === "colts") team.spread = "14.5"; //9

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "11"; //7 and 6

    //         if (team.name === "eagles") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 10;
    //         }

    //         if (team.name === "browns") team.spread = "8"; //5
    //         if (team.name === "ravens") team.spread = "4"; //4

    //         if (team.name === "chargers") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "pack") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //2

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["wash", "bills"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(true);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(answer[0].name).to.equal("eagles");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("chargers");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(answer[5].name).to.equal("browns");
    //       expect(answer[6].name).to.equal("ravens");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("rams");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are NOT in sequetial order, a dupes in non-locked, no non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //7 and 6
    //         if (team.name === "colts") team.spread = "14.5"; //9

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "11"; //7 and 6

    //         if (team.name === "eagles") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 10;
    //         }

    //         if (team.name === "browns") team.spread = "3.5"; //5
    //         if (team.name === "ravens") team.spread = "4"; //4

    //         if (team.name === "chargers") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "pack") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //2

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["wash", "bills"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(true);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(answer[0].name).to.equal("eagles");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("chargers");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(answer[5].name).to.equal("ravens");
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("rams");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are NOT in sequetial order, no dupes in non-locked, a non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //8
    //         if (team.name === "colts") team.spread = "14.5"; //9

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "5"; //6

    //         if (team.name === "eagles") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 10;
    //         }

    //         if (team.name === "browns") team.spread = "8"; //7
    //         if (team.name === "ravens") team.spread = "4"; //4

    //         if (team.name === "chargers") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 5;
    //         }

    //         if (team.name === "pack") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //2

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(true);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(true);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(answer[0].name).to.equal("eagles");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("bills");
    //       expect(answer[3].name).to.equal("browns");
    //       expect(answer[4].name).to.equal("wash");
    //       expect(answer[5].name).to.equal("chargers");
    //       expect(answer[6].name).to.equal("ravens");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("rams");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are NOT in sequetial order, no dupes in non-locked, no non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //8
    //         if (team.name === "colts") team.spread = "14.5"; //9

    //         if (team.name === "titans") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "wash") team.spread = "5"; //7

    //         if (team.name === "eagles") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 10;
    //         }

    //         if (team.name === "browns") team.spread = "1"; //2
    //         if (team.name === "ravens") team.spread = "4"; //6

    //         if (team.name === "chargers") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 5;
    //         }

    //         if (team.name === "pack") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         if (team.name === "rams") team.spread = "3"; //4

    //         return team;
    //       });

    //       answer = sort(teams);

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(true);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(true);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(answer[0].name).to.equal("eagles");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("bills");
    //       expect(answer[3].name).to.equal("wash");
    //       expect(answer[4].name).to.equal("ravens");
    //       expect(answer[5].name).to.equal("chargers");
    //       expect(answer[6].name).to.equal("rams");
    //       expect(answer[7].name).to.equal("titans");
    //       expect(answer[8].name).to.equal("browns");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ 1 same spread, no dupes in locked, a non locked team has the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //7-5-4
    //         if (team.name === "colts") team.spread = "14.5"; //10
    //         if (team.name === "titans") team.spread = "12"; //8
    //         if (team.name === "wash") team.spread = "11"; //7-5-4

    //         if (team.name === "eagles") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "browns") team.spread = "11"; //7-5-4
    //         if (team.name === "ravens") team.spread = "9"; //3
    //         if (team.name === "chargers") team.spread = "5"; //2
    //         if (team.name === "pack") team.spread = "13"; //9
    //         if (team.name === "rams") team.spread = "3"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "wash", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("colts");
    //       expect(answer[1].name).to.equal("pack");
    //       expect(answer[2].name).to.equal("titans");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(answer[7].name).to.equal("ravens");
    //       expect(answer[8].name).to.equal("chargers");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ 1 same spread, no dupes in locked, no non locked team has the same spread as the locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //7-5-4
    //         if (team.name === "colts") team.spread = "14.5"; //10
    //         if (team.name === "titans") team.spread = "12"; //8
    //         if (team.name === "wash") team.spread = "11"; //7-5-4

    //         if (team.name === "eagles") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "browns") team.spread = "11"; //7-5-4
    //         if (team.name === "ravens") team.spread = "9"; //3
    //         if (team.name === "chargers") team.spread = "9.5"; //2
    //         if (team.name === "pack") team.spread = "13"; //9
    //         if (team.name === "rams") team.spread = "3"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "wash", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("colts");
    //       expect(answer[1].name).to.equal("pack");
    //       expect(answer[2].name).to.equal("titans");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(answer[7].name).to.equal("chargers");
    //       expect(answer[8].name).to.equal("ravens");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ same spread for 2 diff spreads, no dupes in locked, a non locked team has the same spread as the locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //8-7-5
    //         if (team.name === "colts") team.spread = "14.5"; //10
    //         if (team.name === "titans") team.spread = "12"; //9
    //         if (team.name === "wash") team.spread = "11"; //8-7-5

    //         if (team.name === "eagles") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "browns") team.spread = "11"; //8-7-5
    //         if (team.name === "ravens") team.spread = "9"; //3-2
    //         if (team.name === "chargers") team.spread = "9"; //3-2
    //         if (team.name === "pack") team.spread = "2"; //1
    //         if (team.name === "rams") team.spread = "10"; //4

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "wash", "browns", "ravens", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("colts");
    //       expect(answer[1].name).to.equal("titans");
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(answer[6].name).to.equal("rams");
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[8].name)).to.equal(true);
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ same spread for 2 diff spreads, no dupes in locked, no non locked team has the same spread as the locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //8-7-5
    //         if (team.name === "colts") team.spread = "14.5"; //10
    //         if (team.name === "titans") team.spread = "12"; //9
    //         if (team.name === "wash") team.spread = "11"; //8-7-5

    //         if (team.name === "eagles") {
    //           team.spread = "5";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "browns") team.spread = "11"; //8-7-5
    //         if (team.name === "ravens") team.spread = "9"; //4-3
    //         if (team.name === "chargers") team.spread = "9"; //4-3
    //         if (team.name === "pack") team.spread = "2"; //2
    //         if (team.name === "rams") team.spread = "3"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "wash", "browns", "ravens", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("colts");
    //       expect(answer[1].name).to.equal("titans");
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(answer[8].name).to.equal("rams");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ 1 same spread, no dupes in locked, a non locked team has the same spread as the locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //7-6
    //         if (team.name === "colts") team.spread = "14.5"; //10
    //         if (team.name === "titans") team.spread = "12"; //9
    //         if (team.name === "wash") team.spread = "11.5"; //8

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "browns") team.spread = "8.5"; //4
    //         if (team.name === "ravens") team.spread = "9"; //5
    //         if (team.name === "chargers") team.spread = "11"; //7-6
    //         if (team.name === "pack") team.spread = "2"; //1
    //         if (team.name === "rams") team.spread = "3"; //3

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("colts");
    //       expect(answer[1].name).to.equal("titans");
    //       expect(answer[2].name).to.equal("wash");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(answer[5].name).to.equal("ravens");
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("rams");
    //       expect(answer[8].name).to.equal("eagles");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ 1 same spread, no dupes in locked, no non locked team has the same spread as the locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "11"; //7-6
    //         if (team.name === "colts") team.spread = "14.5"; //10
    //         if (team.name === "titans") team.spread = "12"; //9
    //         if (team.name === "wash") team.spread = "11.5"; //8

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "browns") team.spread = "8"; //4
    //         if (team.name === "ravens") team.spread = "9"; //5
    //         if (team.name === "chargers") team.spread = "11"; //7-6
    //         if (team.name === "pack") team.spread = "2"; //1
    //         if (team.name === "rams") team.spread = "3"; //3

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("colts");
    //       expect(answer[1].name).to.equal("titans");
    //       expect(answer[2].name).to.equal("wash");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(answer[5].name).to.equal("ravens");
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("rams");
    //       expect(answer[8].name).to.equal("eagles");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ same spread for 2 diff spreads, no dupes in locked, a non locked team has the same spread as the locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "16"; //10-9-8
    //         if (team.name === "colts") team.spread = "1.5"; //1
    //         if (team.name === "titans") team.spread = "16"; //10-9-8
    //         if (team.name === "wash") team.spread = "8.5"; //6-5

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "browns") team.spread = "8"; //4
    //         if (team.name === "ravens") team.spread = "9"; //7
    //         if (team.name === "chargers") team.spread = "8.5"; //6-5
    //         if (team.name === "pack") team.spread = "2"; //3
    //         if (team.name === "rams") team.spread = "16"; //10-9-8

    //         return team;
    //       });

    //       answer = sort(teams);

    //       //bills, titans, rams   -- wash, chargers

    //       teams2Audit = ["bills", "titans", "rams", "chargers", "wash"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(teams2Audit.includes(answer[0].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(answer[3].name).to.equal("ravens");
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(answer[6].name).to.equal("browns");
    //       expect(answer[7].name).to.equal("pack");
    //       expect(answer[8].name).to.equal("eagles");
    //       expect(answer[9].name).to.equal("colts");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ same spread for 2 diff spreads, no non locked team has the same spread as the locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "16"; //10-9-7
    //         if (team.name === "colts") team.spread = "1.5"; //1
    //         if (team.name === "titans") team.spread = "16"; //10-9-7
    //         if (team.name === "wash") team.spread = "7"; //4-3

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "browns") team.spread = "8"; //5
    //         if (team.name === "ravens") team.spread = "9"; //6
    //         if (team.name === "chargers") team.spread = "7"; //4-3
    //         if (team.name === "pack") team.spread = "2"; //2
    //         if (team.name === "rams") team.spread = "16"; //10-9-7

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "titans", "rams", "chargers", "wash"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(teams2Audit.includes(answer[0].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(answer[2].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("ravens");
    //       expect(answer[5].name).to.equal("browns");
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(answer[8].name).to.equal("pack");
    //       expect(answer[9].name).to.equal("colts");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ 1 same spread, locks are in sequetial order, dupes for non-locked too, non locked teams have the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "4"; //2

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 7;
    //         }

    //         if (team.name === "titans") team.spread = "16"; //10
    //         if (team.name === "wash") team.spread = "7"; //3

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "browns") team.spread = "8.5"; //9-5

    //         if (team.name === "ravens") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "chargers") team.spread = "7.5"; //4
    //         if (team.name === "pack") team.spread = "8.5"; //9-5
    //         if (team.name === "rams") team.spread = "1"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["pack", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(true);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("titans");
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(answer[2].name).to.equal("ravens");
    //       expect(answer[3].name).to.equal("colts");
    //       expect(answer[4].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(answer[6].name).to.equal("chargers");
    //       expect(answer[7].name).to.equal("wash");
    //       expect(answer[8].name).to.equal("bills");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ 1 same spread, locks are in sequetial order, dupes for non-locked too, non locked teams have diff dupe spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "4"; //5

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "titans") team.spread = "16"; //10
    //         if (team.name === "wash") team.spread = "7"; //6

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         if (team.name === "browns") team.spread = "15"; //9-8

    //         if (team.name === "ravens") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "chargers") team.spread = "7.5"; //7
    //         if (team.name === "pack") team.spread = "15"; //9-8
    //         if (team.name === "rams") team.spread = "1"; //1

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["pack", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(true);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("titans");
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(answer[3].name).to.equal("chargers");
    //       expect(answer[4].name).to.equal("wash");
    //       expect(answer[5].name).to.equal("bills");
    //       expect(answer[6].name).to.equal("eagles");
    //       expect(answer[7].name).to.equal("colts");
    //       expect(answer[8].name).to.equal("ravens");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ 1 same spread, locks are NOT sequetial order, dupes for non-locked too, non locked teams have the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "4"; //3

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 9;
    //         }

    //         if (team.name === "titans") team.spread = "8.5"; //8-7
    //         if (team.name === "wash") team.spread = "7"; //5

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         if (team.name === "browns") team.spread = "8.5"; //8-7

    //         if (team.name === "ravens") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         if (team.name === "chargers") team.spread = "7.5"; //6
    //         if (team.name === "pack") team.spread = "15"; //10
    //         if (team.name === "rams") team.spread = "1"; //2

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["titans", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(answer[0].name).to.equal("pack");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("chargers");
    //       expect(answer[5].name).to.equal("wash");
    //       expect(answer[6].name).to.equal("eagles");
    //       expect(answer[7].name).to.equal("bills");
    //       expect(answer[8].name).to.equal("rams");
    //       expect(answer[9].name).to.equal("ravens");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ 1 same spread, locks are NOT sequetial order, dupes for non-locked too, non locked teams have diff spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "4"; //3

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 9;
    //         }

    //         if (team.name === "titans") team.spread = "6"; //6-5
    //         if (team.name === "wash") team.spread = "7"; //8

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         if (team.name === "browns") team.spread = "6"; //6-5

    //         if (team.name === "ravens") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         if (team.name === "chargers") team.spread = "7.5"; //7
    //         if (team.name === "pack") team.spread = "15"; //10
    //         if (team.name === "rams") team.spread = "1"; //2

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["titans", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(answer[0].name).to.equal("pack");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("chargers");
    //       expect(answer[3].name).to.equal("wash");
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(answer[6].name).to.equal("eagles");
    //       expect(answer[7].name).to.equal("bills");
    //       expect(answer[8].name).to.equal("rams");
    //       expect(answer[9].name).to.equal("ravens");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are in NOT sequetial order, dupes for non-locked too, non locked teams have the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "4"; //2

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 9;
    //         }

    //         if (team.name === "titans") team.spread = "8.5"; //7-5
    //         if (team.name === "wash") team.spread = "11"; //8

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         if (team.name === "browns") team.spread = "8.5"; //7-5

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "chargers") team.spread = "7.5"; //3
    //         if (team.name === "pack") team.spread = "15"; //10

    //         if (team.name === "rams") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["titans", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(answer[0].name).to.equal("pack");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("wash");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("ravens");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(answer[6].name).to.equal("eagles");
    //       expect(answer[7].name).to.equal("chargers");
    //       expect(answer[8].name).to.equal("bills");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are in NOT sequetial order, dupes for non-locked too, non locked teams have diff spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "4"; //2

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 9;
    //         }

    //         if (team.name === "titans") team.spread = "16"; //10-8
    //         if (team.name === "wash") team.spread = "11"; //5

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         if (team.name === "browns") team.spread = "16"; //10-8

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "chargers") team.spread = "7.5"; //3
    //         if (team.name === "pack") team.spread = "15"; //7

    //         if (team.name === "rams") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 1;
    //         }

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["titans", "browns"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(true);

    //       expect(teams2Audit.includes(answer[0].name)).to.equal(true);
    //       expect(answer[1].name).to.equal("colts");
    //       expect(teams2Audit.includes(answer[2].name)).to.equal(true);
    //       expect(answer[3].name).to.equal("pack");
    //       expect(answer[4].name).to.equal("ravens");
    //       expect(answer[5].name).to.equal("wash");
    //       expect(answer[6].name).to.equal("eagles");
    //       expect(answer[7].name).to.equal("chargers");
    //       expect(answer[8].name).to.equal("bills");
    //       expect(answer[9].name).to.equal("rams");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are in sequetial order, dupes for non-locked too, non locked teams have the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "8.5"; //2-1

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 9;
    //         }

    //         if (team.name === "titans") team.spread = "16"; //10
    //         if (team.name === "wash") team.spread = "11"; //7

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "browns") team.spread = "8.5"; //2-1

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 5;
    //         }

    //         if (team.name === "chargers") team.spread = "10"; //6-3
    //         if (team.name === "pack") team.spread = "10"; //6-3

    //         if (team.name === "rams") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["bills", "browns", "pack", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(true);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("titans");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("eagles");
    //       expect(answer[3].name).to.equal("wash");
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(answer[5].name).to.equal("ravens");
    //       expect(answer[6].name).to.equal("rams");
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[8].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[9].name)).to.equal(true);

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are in sequetial order, dupes for non-locked too, non locked teams have diff spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "14"; //10

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 9;
    //         }

    //         if (team.name === "titans") team.spread = "11"; //7-6
    //         if (team.name === "wash") team.spread = "11"; //7-6

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "browns") team.spread = "8"; //3

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 5;
    //         }

    //         if (team.name === "chargers") team.spread = "1"; //2-1
    //         if (team.name === "pack") team.spread = "1"; //2-1

    //         if (team.name === "rams") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["titans", "wash", "pack", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(true);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("bills");
    //       expect(answer[1].name).to.equal("colts");
    //       expect(answer[2].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(answer[5].name).to.equal("ravens");
    //       expect(answer[6].name).to.equal("rams");
    //       expect(answer[7].name).to.equal("browns");
    //       expect(teams2Audit.includes(answer[8].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[9].name)).to.equal(true);

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are NOT in sequetial order, dupes for non-locked too, non locked teams have the same spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "8.5"; //5-3

    //         if (team.name === "colts") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "titans") team.spread = "8.5"; //5-3
    //         if (team.name === "wash") team.spread = "11"; //10

    //         if (team.name === "eagles") {
    //           team.spread = "8.5";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "browns") team.spread = "10"; //9-7

    //         if (team.name === "ravens") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "chargers") team.spread = "10"; //9-7
    //         if (team.name === "pack") team.spread = "1"; //1

    //         if (team.name === "rams") {
    //           team.spread = "10";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["titans", "bills", "browns", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("wash");
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(answer[2].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("ravens");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(answer[6].name).to.equal("rams");
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(answer[8].name).to.equal("colts");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });

    //     it("2+ locked w/ same spread for 2 diff spreads, locks are NOT in sequetial order, dupes for non-locked too, non locked teams have diff spread as the locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "bills") team.spread = "8.5";

    //         if (team.name === "colts") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 2;
    //         }

    //         if (team.name === "titans") team.spread = "8.5";
    //         if (team.name === "wash") team.spread = "11";

    //         if (team.name === "eagles") {
    //           team.spread = "8";
    //           team.locked = true;
    //           team.rank = 8;
    //         }

    //         if (team.name === "browns") team.spread = "10";

    //         if (team.name === "ravens") {
    //           team.spread = "4";
    //           team.locked = true;
    //           team.rank = 6;
    //         }

    //         if (team.name === "chargers") team.spread = "10";
    //         if (team.name === "pack") team.spread = "1";

    //         if (team.name === "rams") {
    //           team.spread = "4";
    //           team.locked = true;
    //           team.rank = 4;
    //         }

    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["titans", "bills", "browns", "chargers"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(true);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(true);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(true);
    //       expect(lockedAudit[9]).to.equal(false);

    //       expect(answer[0].name).to.equal("wash");
    //       expect(teams2Audit.includes(answer[1].name)).to.equal(true);
    //       expect(answer[2].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(answer[4].name).to.equal("ravens");
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(answer[6].name).to.equal("rams");
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(answer[8].name).to.equal("colts");
    //       expect(answer[9].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(10);
    //       expect(answer[1].rank).to.equal(9);
    //       expect(answer[2].rank).to.equal(8);
    //       expect(answer[3].rank).to.equal(7);
    //       expect(answer[4].rank).to.equal(6);
    //       expect(answer[5].rank).to.equal(5);
    //       expect(answer[6].rank).to.equal(4);
    //       expect(answer[7].rank).to.equal(3);
    //       expect(answer[8].rank).to.equal(2);
    //       expect(answer[9].rank).to.equal(1);
    //     });
    //   });

    //   describe("sorts 16 teams correctly", () => {
    //     it("2+ non-locked w/ same spread, only 1 team = locked, locked team has the same spread as the non-locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "chiefs") team.spread = "16"; //16

    //         if (team.name === "eagles") {
    //           team.spread = "9";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "ravens") team.spread = "9"; //12-11-10
    //         if (team.name === "browns") team.spread = "15"; //15
    //         if (team.name === "pack") team.spread = "1"; //1
    //         if (team.name === "titans") team.spread = "9"; //12-11-10
    //         if (team.name === "colts") team.spread = "6"; //6
    //         if (team.name === "vikings") team.spread = "7"; //7
    //         if (team.name === "wash") team.spread = "7.5"; //8
    //         if (team.name === "saints") team.spread = "9"; //12-11-10
    //         if (team.name === "bills") team.spread = "8"; //9
    //         if (team.name === "pats") team.spread = "12.5"; //13
    //         if (team.name === "bucs") team.spread = "14"; //14
    //         if (team.name === "cards") team.spread = "5"; //5
    //         if (team.name === "rams") team.spread = "3"; //2
    //         if (team.name === "chargers") team.spread = "4"; //4
    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["ravens", "titans", "saints"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);
    //       expect(lockedAudit[10]).to.equal(false);
    //       expect(lockedAudit[11]).to.equal(false);
    //       expect(lockedAudit[12]).to.equal(false);
    //       expect(lockedAudit[13]).to.equal(true);
    //       expect(lockedAudit[14]).to.equal(false);
    //       expect(lockedAudit[15]).to.equal(false);

    //       expect(answer[0].name).to.equal("chiefs");
    //       expect(answer[1].name).to.equal("browns");
    //       expect(answer[2].name).to.equal("bucs");
    //       expect(answer[3].name).to.equal("pats");
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(answer[7].name).to.equal("bills");
    //       expect(answer[8].name).to.equal("wash");
    //       expect(answer[9].name).to.equal("vikings");
    //       expect(answer[10].name).to.equal("colts");
    //       expect(answer[11].name).to.equal("cards");
    //       expect(answer[12].name).to.equal("chargers");
    //       expect(answer[13].name).to.equal("eagles");
    //       expect(answer[14].name).to.equal("rams");
    //       expect(answer[15].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(16);
    //       expect(answer[1].rank).to.equal(15);
    //       expect(answer[2].rank).to.equal(14);
    //       expect(answer[3].rank).to.equal(13);
    //       expect(answer[4].rank).to.equal(12);
    //       expect(answer[5].rank).to.equal(11);
    //       expect(answer[6].rank).to.equal(10);
    //       expect(answer[7].rank).to.equal(9);
    //       expect(answer[8].rank).to.equal(8);
    //       expect(answer[9].rank).to.equal(7);
    //       expect(answer[10].rank).to.equal(6);
    //       expect(answer[11].rank).to.equal(5);
    //       expect(answer[12].rank).to.equal(4);
    //       expect(answer[13].rank).to.equal(3);
    //       expect(answer[14].rank).to.equal(2);
    //       expect(answer[15].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ same spread, only 1 team = locked, locked team has diff spread as the non-locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "chiefs") team.spread = "16"; //16

    //         if (team.name === "eagles") {
    //           team.spread = "6.5";
    //           team.locked = true;
    //           team.rank = 3;
    //         }

    //         if (team.name === "ravens") team.spread = "9"; //12-11-10
    //         if (team.name === "browns") team.spread = "15"; //15
    //         if (team.name === "pack") team.spread = "1"; //1
    //         if (team.name === "titans") team.spread = "9"; //12-11-10
    //         if (team.name === "colts") team.spread = "6"; //6
    //         if (team.name === "vikings") team.spread = "7"; //7
    //         if (team.name === "wash") team.spread = "7.5"; //8
    //         if (team.name === "saints") team.spread = "9"; //12-11-10
    //         if (team.name === "bills") team.spread = "8"; //9
    //         if (team.name === "pats") team.spread = "12.5"; //13
    //         if (team.name === "bucs") team.spread = "14"; //14
    //         if (team.name === "cards") team.spread = "5"; //5
    //         if (team.name === "rams") team.spread = "3"; //2
    //         if (team.name === "chargers") team.spread = "4"; //4
    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["ravens", "titans", "saints"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(false);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);
    //       expect(lockedAudit[10]).to.equal(false);
    //       expect(lockedAudit[11]).to.equal(false);
    //       expect(lockedAudit[12]).to.equal(false);
    //       expect(lockedAudit[13]).to.equal(true);
    //       expect(lockedAudit[14]).to.equal(false);
    //       expect(lockedAudit[15]).to.equal(false);

    //       expect(answer[0].name).to.equal("chiefs");
    //       expect(answer[1].name).to.equal("browns");
    //       expect(answer[2].name).to.equal("bucs");
    //       expect(answer[3].name).to.equal("pats");
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[5].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(answer[7].name).to.equal("bills");
    //       expect(answer[8].name).to.equal("wash");
    //       expect(answer[9].name).to.equal("vikings");
    //       expect(answer[10].name).to.equal("colts");
    //       expect(answer[11].name).to.equal("cards");
    //       expect(answer[12].name).to.equal("chargers");
    //       expect(answer[13].name).to.equal("eagles");
    //       expect(answer[14].name).to.equal("rams");
    //       expect(answer[15].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(16);
    //       expect(answer[1].rank).to.equal(15);
    //       expect(answer[2].rank).to.equal(14);
    //       expect(answer[3].rank).to.equal(13);
    //       expect(answer[4].rank).to.equal(12);
    //       expect(answer[5].rank).to.equal(11);
    //       expect(answer[6].rank).to.equal(10);
    //       expect(answer[7].rank).to.equal(9);
    //       expect(answer[8].rank).to.equal(8);
    //       expect(answer[9].rank).to.equal(7);
    //       expect(answer[10].rank).to.equal(6);
    //       expect(answer[11].rank).to.equal(5);
    //       expect(answer[12].rank).to.equal(4);
    //       expect(answer[13].rank).to.equal(3);
    //       expect(answer[14].rank).to.equal(2);
    //       expect(answer[15].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ same spread for 2 diff spreads, only 1 team = locked, locked team has the same spread as the non-locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "chiefs") team.spread = "7.5"; //8-7

    //         if (team.name === "eagles") {
    //           team.spread = "7.5";
    //           team.locked = true;
    //           team.rank = 11;
    //         }

    //         if (team.name === "ravens") team.spread = "9"; //13-12-10
    //         if (team.name === "browns") team.spread = "15"; //16
    //         if (team.name === "pack") team.spread = "1"; //1
    //         if (team.name === "titans") team.spread = "9"; //13-12-10
    //         if (team.name === "colts") team.spread = "6"; //5
    //         if (team.name === "vikings") team.spread = "7"; //6
    //         if (team.name === "wash") team.spread = "7.5"; //8-7
    //         if (team.name === "saints") team.spread = "9"; //13-12-10
    //         if (team.name === "bills") team.spread = "8"; //9
    //         if (team.name === "pats") team.spread = "12.5"; //14
    //         if (team.name === "bucs") team.spread = "14"; //15
    //         if (team.name === "cards") team.spread = "5"; //4
    //         if (team.name === "rams") team.spread = "3"; //2
    //         if (team.name === "chargers") team.spread = "4"; //3
    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["ravens", "titans", "saints", "chiefs", "wash"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(true);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);
    //       expect(lockedAudit[10]).to.equal(false);
    //       expect(lockedAudit[11]).to.equal(false);
    //       expect(lockedAudit[12]).to.equal(false);
    //       expect(lockedAudit[13]).to.equal(false);
    //       expect(lockedAudit[14]).to.equal(false);
    //       expect(lockedAudit[15]).to.equal(false);

    //       expect(answer[0].name).to.equal("browns");
    //       expect(answer[1].name).to.equal("bucs");
    //       expect(answer[2].name).to.equal("pats");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(answer[5].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(answer[7].name).to.equal("bills");
    //       expect(teams2Audit.includes(answer[8].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[9].name)).to.equal(true);
    //       expect(answer[10].name).to.equal("vikings");
    //       expect(answer[11].name).to.equal("colts");
    //       expect(answer[12].name).to.equal("cards");
    //       expect(answer[13].name).to.equal("chargers");
    //       expect(answer[14].name).to.equal("rams");
    //       expect(answer[15].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(16);
    //       expect(answer[1].rank).to.equal(15);
    //       expect(answer[2].rank).to.equal(14);
    //       expect(answer[3].rank).to.equal(13);
    //       expect(answer[4].rank).to.equal(12);
    //       expect(answer[5].rank).to.equal(11);
    //       expect(answer[6].rank).to.equal(10);
    //       expect(answer[7].rank).to.equal(9);
    //       expect(answer[8].rank).to.equal(8);
    //       expect(answer[9].rank).to.equal(7);
    //       expect(answer[10].rank).to.equal(6);
    //       expect(answer[11].rank).to.equal(5);
    //       expect(answer[12].rank).to.equal(4);
    //       expect(answer[13].rank).to.equal(3);
    //       expect(answer[14].rank).to.equal(2);
    //       expect(answer[15].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ same spread for 2 diff spreads, only 1 team = locked, locked team has diff spread as the non-locked dupe spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "chiefs") team.spread = "7.5"; //8-7

    //         if (team.name === "eagles") {
    //           team.spread = "18";
    //           team.locked = true;
    //           team.rank = 11;
    //         }

    //         if (team.name === "ravens") team.spread = "9"; //13-12-10
    //         if (team.name === "browns") team.spread = "15"; //16
    //         if (team.name === "pack") team.spread = "1"; //1
    //         if (team.name === "titans") team.spread = "9"; //13-12-10
    //         if (team.name === "colts") team.spread = "6"; //5
    //         if (team.name === "vikings") team.spread = "7"; //6
    //         if (team.name === "wash") team.spread = "7.5"; //8-7
    //         if (team.name === "saints") team.spread = "9"; //13-12-10
    //         if (team.name === "bills") team.spread = "8"; //9
    //         if (team.name === "pats") team.spread = "12.5"; //14
    //         if (team.name === "bucs") team.spread = "14"; //15
    //         if (team.name === "cards") team.spread = "5"; //4
    //         if (team.name === "rams") team.spread = "3"; //2
    //         if (team.name === "chargers") team.spread = "4"; //3
    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["ravens", "titans", "saints", "chiefs", "wash"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(false);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(false);
    //       expect(lockedAudit[5]).to.equal(true);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);
    //       expect(lockedAudit[10]).to.equal(false);
    //       expect(lockedAudit[11]).to.equal(false);
    //       expect(lockedAudit[12]).to.equal(false);
    //       expect(lockedAudit[13]).to.equal(false);
    //       expect(lockedAudit[14]).to.equal(false);
    //       expect(lockedAudit[15]).to.equal(false);

    //       expect(answer[0].name).to.equal("browns");
    //       expect(answer[1].name).to.equal("bucs");
    //       expect(answer[2].name).to.equal("pats");
    //       expect(teams2Audit.includes(answer[3].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[4].name)).to.equal(true);
    //       expect(answer[5].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(answer[7].name).to.equal("bills");
    //       expect(teams2Audit.includes(answer[8].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[9].name)).to.equal(true);
    //       expect(answer[10].name).to.equal("vikings");
    //       expect(answer[11].name).to.equal("colts");
    //       expect(answer[12].name).to.equal("cards");
    //       expect(answer[13].name).to.equal("chargers");
    //       expect(answer[14].name).to.equal("rams");
    //       expect(answer[15].name).to.equal("pack");

    //       expect(answer[0].rank).to.equal(16);
    //       expect(answer[1].rank).to.equal(15);
    //       expect(answer[2].rank).to.equal(14);
    //       expect(answer[3].rank).to.equal(13);
    //       expect(answer[4].rank).to.equal(12);
    //       expect(answer[5].rank).to.equal(11);
    //       expect(answer[6].rank).to.equal(10);
    //       expect(answer[7].rank).to.equal(9);
    //       expect(answer[8].rank).to.equal(8);
    //       expect(answer[9].rank).to.equal(7);
    //       expect(answer[10].rank).to.equal(6);
    //       expect(answer[11].rank).to.equal(5);
    //       expect(answer[12].rank).to.equal(4);
    //       expect(answer[13].rank).to.equal(3);
    //       expect(answer[14].rank).to.equal(2);
    //       expect(answer[15].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ same spread, 2+ teams = locked, but with diff spreads for each lock, one of the locked spreads is the same as the dupe non-locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "chiefs") team.spread = "7.5"; //10-9

    //         if (team.name === "eagles") {
    //           team.spread = "2";
    //           team.locked = true;
    //           team.rank = 11;
    //         }

    //         if (team.name === "ravens") team.spread = "2"; //3-2-1
    //         if (team.name === "browns") team.spread = "15"; //16

    //         if (team.name === "pack") {
    //           team.spread = "18";
    //           team.locked = true;
    //           team.rank = 15;
    //         }

    //         if (team.name === "titans") team.spread = "2"; //3-2-1
    //         if (team.name === "colts") team.spread = "6"; //7
    //         if (team.name === "vikings") team.spread = "7"; //8
    //         if (team.name === "wash") team.spread = "7.5"; //10-9
    //         if (team.name === "saints") team.spread = "2"; //3-2-1
    //         if (team.name === "bills") team.spread = "8"; //13

    //         if (team.name === "pats") {
    //           team.spread = "10.5";
    //           team.locked = true;
    //           team.rank = 12;
    //         }

    //         if (team.name === "bucs") team.spread = "14"; //14
    //         if (team.name === "cards") team.spread = "5"; //6
    //         if (team.name === "rams") team.spread = "3"; //4
    //         if (team.name === "chargers") team.spread = "4"; //5
    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["ravens", "titans", "saints", "chiefs", "wash"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(true);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);
    //       expect(lockedAudit[10]).to.equal(false);
    //       expect(lockedAudit[11]).to.equal(false);
    //       expect(lockedAudit[12]).to.equal(false);
    //       expect(lockedAudit[13]).to.equal(false);
    //       expect(lockedAudit[14]).to.equal(false);
    //       expect(lockedAudit[15]).to.equal(false);

    //       expect(answer[0].name).to.equal("browns");
    //       expect(answer[1].name).to.equal("pack");
    //       expect(answer[2].name).to.equal("bucs");
    //       expect(answer[3].name).to.equal("bills");
    //       expect(answer[4].name).to.equal("pats");
    //       expect(answer[5].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(answer[8].name).to.equal("vikings");
    //       expect(answer[9].name).to.equal("colts");
    //       expect(answer[10].name).to.equal("cards");
    //       expect(answer[11].name).to.equal("chargers");
    //       expect(answer[12].name).to.equal("rams");
    //       expect(teams2Audit.includes(answer[13].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[14].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[15].name)).to.equal(true);

    //       expect(answer[0].rank).to.equal(16);
    //       expect(answer[1].rank).to.equal(15);
    //       expect(answer[2].rank).to.equal(14);
    //       expect(answer[3].rank).to.equal(13);
    //       expect(answer[4].rank).to.equal(12);
    //       expect(answer[5].rank).to.equal(11);
    //       expect(answer[6].rank).to.equal(10);
    //       expect(answer[7].rank).to.equal(9);
    //       expect(answer[8].rank).to.equal(8);
    //       expect(answer[9].rank).to.equal(7);
    //       expect(answer[10].rank).to.equal(6);
    //       expect(answer[11].rank).to.equal(5);
    //       expect(answer[12].rank).to.equal(4);
    //       expect(answer[13].rank).to.equal(3);
    //       expect(answer[14].rank).to.equal(2);
    //       expect(answer[15].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ same spread, 2+ teams = locked, but with diff spreads for each lock, locked spreads are diff from the dupe non-locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "chiefs") team.spread = "7.5"; //10-9

    //         if (team.name === "eagles") {
    //           team.spread = "16.5";
    //           team.locked = true;
    //           team.rank = 11;
    //         }

    //         if (team.name === "ravens") team.spread = "2"; //3-2-1
    //         if (team.name === "browns") team.spread = "15"; //16

    //         if (team.name === "pack") {
    //           team.spread = "18";
    //           team.locked = true;
    //           team.rank = 15;
    //         }

    //         if (team.name === "titans") team.spread = "2"; //3-2-1
    //         if (team.name === "colts") team.spread = "6"; //7
    //         if (team.name === "vikings") team.spread = "7"; //8
    //         if (team.name === "wash") team.spread = "7.5"; //10-9
    //         if (team.name === "saints") team.spread = "2"; //3-2-1
    //         if (team.name === "bills") team.spread = "8"; //13

    //         if (team.name === "pats") {
    //           team.spread = "10.5";
    //           team.locked = true;
    //           team.rank = 12;
    //         }

    //         if (team.name === "bucs") team.spread = "14"; //14
    //         if (team.name === "cards") team.spread = "5"; //6
    //         if (team.name === "rams") team.spread = "3"; //4
    //         if (team.name === "chargers") team.spread = "4"; //5
    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["ravens", "titans", "saints", "chiefs", "wash"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(true);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);
    //       expect(lockedAudit[10]).to.equal(false);
    //       expect(lockedAudit[11]).to.equal(false);
    //       expect(lockedAudit[12]).to.equal(false);
    //       expect(lockedAudit[13]).to.equal(false);
    //       expect(lockedAudit[14]).to.equal(false);
    //       expect(lockedAudit[15]).to.equal(false);

    //       expect(answer[0].name).to.equal("browns");
    //       expect(answer[1].name).to.equal("pack");
    //       expect(answer[2].name).to.equal("bucs");
    //       expect(answer[3].name).to.equal("bills");
    //       expect(answer[4].name).to.equal("pats");
    //       expect(answer[5].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(answer[8].name).to.equal("vikings");
    //       expect(answer[9].name).to.equal("colts");
    //       expect(answer[10].name).to.equal("cards");
    //       expect(answer[11].name).to.equal("chargers");
    //       expect(answer[12].name).to.equal("rams");
    //       expect(teams2Audit.includes(answer[13].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[14].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[15].name)).to.equal(true);

    //       expect(answer[0].rank).to.equal(16);
    //       expect(answer[1].rank).to.equal(15);
    //       expect(answer[2].rank).to.equal(14);
    //       expect(answer[3].rank).to.equal(13);
    //       expect(answer[4].rank).to.equal(12);
    //       expect(answer[5].rank).to.equal(11);
    //       expect(answer[6].rank).to.equal(10);
    //       expect(answer[7].rank).to.equal(9);
    //       expect(answer[8].rank).to.equal(8);
    //       expect(answer[9].rank).to.equal(7);
    //       expect(answer[10].rank).to.equal(6);
    //       expect(answer[11].rank).to.equal(5);
    //       expect(answer[12].rank).to.equal(4);
    //       expect(answer[13].rank).to.equal(3);
    //       expect(answer[14].rank).to.equal(2);
    //       expect(answer[15].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ same spread for 2 diff spreads, 2+ teams = locked, but with diff spreads for each lock, one of the locked spreads is the same as the dupe non-locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "chiefs") team.spread = "7.5"; //10-9

    //         if (team.name === "eagles") {
    //           team.spread = "7.5";
    //           team.locked = true;
    //           team.rank = 11;
    //         }

    //         if (team.name === "ravens") team.spread = "2"; //3-2-1
    //         if (team.name === "browns") team.spread = "15"; //16

    //         if (team.name === "pack") {
    //           team.spread = "18";
    //           team.locked = true;
    //           team.rank = 15;
    //         }

    //         if (team.name === "titans") team.spread = "2"; //3-2-1
    //         if (team.name === "colts") team.spread = "6"; //7
    //         if (team.name === "vikings") team.spread = "7"; //8
    //         if (team.name === "wash") team.spread = "7.5"; //10-9
    //         if (team.name === "saints") team.spread = "2"; //3-2-1
    //         if (team.name === "bills") team.spread = "8"; //13

    //         if (team.name === "pats") {
    //           team.spread = "10.5";
    //           team.locked = true;
    //           team.rank = 12;
    //         }

    //         if (team.name === "bucs") team.spread = "14"; //14
    //         if (team.name === "cards") team.spread = "5"; //6
    //         if (team.name === "rams") team.spread = "3"; //4
    //         if (team.name === "chargers") team.spread = "4"; //5
    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["ravens", "titans", "saints", "chiefs", "wash"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(true);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);
    //       expect(lockedAudit[10]).to.equal(false);
    //       expect(lockedAudit[11]).to.equal(false);
    //       expect(lockedAudit[12]).to.equal(false);
    //       expect(lockedAudit[13]).to.equal(false);
    //       expect(lockedAudit[14]).to.equal(false);
    //       expect(lockedAudit[15]).to.equal(false);

    //       expect(answer[0].name).to.equal("browns");
    //       expect(answer[1].name).to.equal("pack");
    //       expect(answer[2].name).to.equal("bucs");
    //       expect(answer[3].name).to.equal("bills");
    //       expect(answer[4].name).to.equal("pats");
    //       expect(answer[5].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(answer[8].name).to.equal("vikings");
    //       expect(answer[9].name).to.equal("colts");
    //       expect(answer[10].name).to.equal("cards");
    //       expect(answer[11].name).to.equal("chargers");
    //       expect(answer[12].name).to.equal("rams");
    //       expect(teams2Audit.includes(answer[13].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[14].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[15].name)).to.equal(true);

    //       expect(answer[0].rank).to.equal(16);
    //       expect(answer[1].rank).to.equal(15);
    //       expect(answer[2].rank).to.equal(14);
    //       expect(answer[3].rank).to.equal(13);
    //       expect(answer[4].rank).to.equal(12);
    //       expect(answer[5].rank).to.equal(11);
    //       expect(answer[6].rank).to.equal(10);
    //       expect(answer[7].rank).to.equal(9);
    //       expect(answer[8].rank).to.equal(8);
    //       expect(answer[9].rank).to.equal(7);
    //       expect(answer[10].rank).to.equal(6);
    //       expect(answer[11].rank).to.equal(5);
    //       expect(answer[12].rank).to.equal(4);
    //       expect(answer[13].rank).to.equal(3);
    //       expect(answer[14].rank).to.equal(2);
    //       expect(answer[15].rank).to.equal(1);
    //     });

    //     it("2+ non-locked w/ same spread for 2 diff spreads, 2+ teams = locked, but with diff spreads for each lock, locked spreads are diff from the dupe non-locked spread", () => {
    //       teams = teams.map((team) => {
    //         if (team.name === "chiefs") team.spread = "7.5"; //10-9

    //         if (team.name === "eagles") {
    //           team.spread = "1.5";
    //           team.locked = true;
    //           team.rank = 11;
    //         }

    //         if (team.name === "ravens") team.spread = "2"; //3-2-1
    //         if (team.name === "browns") team.spread = "15"; //16

    //         if (team.name === "pack") {
    //           team.spread = "18";
    //           team.locked = true;
    //           team.rank = 15;
    //         }

    //         if (team.name === "titans") team.spread = "2"; //3-2-1
    //         if (team.name === "colts") team.spread = "6"; //7
    //         if (team.name === "vikings") team.spread = "7"; //8
    //         if (team.name === "wash") team.spread = "7.5"; //10-9
    //         if (team.name === "saints") team.spread = "2"; //3-2-1
    //         if (team.name === "bills") team.spread = "8"; //13

    //         if (team.name === "pats") {
    //           team.spread = "10.5";
    //           team.locked = true;
    //           team.rank = 12;
    //         }

    //         if (team.name === "bucs") team.spread = "14"; //14
    //         if (team.name === "cards") team.spread = "5"; //6
    //         if (team.name === "rams") team.spread = "3"; //4
    //         if (team.name === "chargers") team.spread = "4"; //5
    //         return team;
    //       });

    //       answer = sort(teams);

    //       teams2Audit = ["ravens", "titans", "saints", "chiefs", "wash"];

    //       lockedAudit = answer.map((user) => user.locked);

    //       expect(lockedAudit[0]).to.equal(false);
    //       expect(lockedAudit[1]).to.equal(true);
    //       expect(lockedAudit[2]).to.equal(false);
    //       expect(lockedAudit[3]).to.equal(false);
    //       expect(lockedAudit[4]).to.equal(true);
    //       expect(lockedAudit[5]).to.equal(true);
    //       expect(lockedAudit[6]).to.equal(false);
    //       expect(lockedAudit[7]).to.equal(false);
    //       expect(lockedAudit[8]).to.equal(false);
    //       expect(lockedAudit[9]).to.equal(false);
    //       expect(lockedAudit[10]).to.equal(false);
    //       expect(lockedAudit[11]).to.equal(false);
    //       expect(lockedAudit[12]).to.equal(false);
    //       expect(lockedAudit[13]).to.equal(false);
    //       expect(lockedAudit[14]).to.equal(false);
    //       expect(lockedAudit[15]).to.equal(false);

    //       expect(answer[0].name).to.equal("browns");
    //       expect(answer[1].name).to.equal("pack");
    //       expect(answer[2].name).to.equal("bucs");
    //       expect(answer[3].name).to.equal("bills");
    //       expect(answer[4].name).to.equal("pats");
    //       expect(answer[5].name).to.equal("eagles");
    //       expect(teams2Audit.includes(answer[6].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[7].name)).to.equal(true);
    //       expect(answer[8].name).to.equal("vikings");
    //       expect(answer[9].name).to.equal("colts");
    //       expect(answer[10].name).to.equal("cards");
    //       expect(answer[11].name).to.equal("chargers");
    //       expect(answer[12].name).to.equal("rams");
    //       expect(teams2Audit.includes(answer[13].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[14].name)).to.equal(true);
    //       expect(teams2Audit.includes(answer[15].name)).to.equal(true);

    //       expect(answer[0].rank).to.equal(16);
    //       expect(answer[1].rank).to.equal(15);
    //       expect(answer[2].rank).to.equal(14);
    //       expect(answer[3].rank).to.equal(13);
    //       expect(answer[4].rank).to.equal(12);
    //       expect(answer[5].rank).to.equal(11);
    //       expect(answer[6].rank).to.equal(10);
    //       expect(answer[7].rank).to.equal(9);
    //       expect(answer[8].rank).to.equal(8);
    //       expect(answer[9].rank).to.equal(7);
    //       expect(answer[10].rank).to.equal(6);
    //       expect(answer[11].rank).to.equal(5);
    //       expect(answer[12].rank).to.equal(4);
    //       expect(answer[13].rank).to.equal(3);
    //       expect(answer[14].rank).to.equal(2);
    //       expect(answer[15].rank).to.equal(1);
    //     });
    //   });
    // });
  });
});
