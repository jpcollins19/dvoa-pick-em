const { expect } = require("chai");
const { capFirstLetter } = require("./src/store/funcs");

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
