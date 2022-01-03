import React, { Component } from "react";
import store, { loadMovies, createMovie } from "./store";
import { connect } from "react-redux";
import Movies from "./Movies";
const faker = require("faker");
// import { HashRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  async componentDidMount() {
    store.dispatch(loadMovies());

    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  render() {
    const { createAMovie, clearAll } = this.props;
    return (
      <div className="main">
        <button
          className="generate-movie-button"
          onClick={() => createAMovie()}
        >
          Generate Random Movie
        </button>

        <Movies />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    createAMovie: () => {
      const name = faker.random.word();
      dispatch(createMovie(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
