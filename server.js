//////////////////////////////////////////CSS work/////////////////////////////////////////////

////once teams are created
//top of page says "Rank Info"
//lists each team by name and the rank
//on the left, there should be a small table that lists each team sorted by spread for reference
//there is an option to clear the teams on click, should have a spinner loader and then show the red background page

////back to first page
//add logic to create teams on submit
//reset button - need to add logic to clear data

//////////////////////////////////////////CSS work/////////////////////////////////////////////

////add work to submit teams - no code on randomizing needs to be added yet
//add react spinner loader to run while the app calcs the teams order

////add DVOA as tiebreaker - footballInsiders is a good source to find out a team's DVOA
//after you submit the teams, the app will determine if there is a tie in spreads.  if there is a tie in any spread,
//then need to write code for ordering the tied teams based on DVOA info
//create a func that takes in the data from the football insiders site, and translates the teams to joe verbiage (fins, pack, etc) with their DVOA rank
//write code from there for when there are ties in spreads - use old code

//roll through every file and delete everything that is commented out

const express = require("express");
const app = express();
const syncAndSeed = require("./server/script/seed");
const path = require("path");

app.use(express.json());

app.use("/dist", express.static(path.join(__dirname, "dist")));

// app.use("/public/css", express.static(path.join(__dirname, "public/css")));
// app.use("/public/pics", express.static(path.join(__dirname, "public/pics")));

app.use("/", require("./server/api/teams.js"));

app.use("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "html/main.html"))
);

const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 1919;
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

init();
