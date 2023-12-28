import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { loadTeams, loadExcelRankings } from "./store";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTeams());
    dispatch(loadExcelRankings());
  }, []);

  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
