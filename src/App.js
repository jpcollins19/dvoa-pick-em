import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { loadTeams } from "./store";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTeams());
  }, []);

  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
