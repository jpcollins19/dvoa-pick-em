import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import logger from "redux-logger";

//////////////////////////////////// ACTION TYPES below:

const LOAD_MOVIES = "LOAD_MOVIES";
const CREATE_MOVIE = "CREATE_MOVIE";
const DELETE_MOVIE = "DELETE_MOVIE";
const INCREASE_STARS = "INCREASE_STARS";
const DECREASE_STARS = "DECREASE_STARS";

//////////////////////////////////// ACTION CREATORS below:

const _loadMovies = (movies) => {
  return { type: LOAD_MOVIES, movies };
};

const _createMovie = (movie) => {
  return { type: CREATE_MOVIE, movie };
};

const _deleteMovie = (movie) => {
  return { type: DELETE_MOVIE, movie };
};

const _increaseStars = (movie) => {
  return { type: INCREASE_STARS, movie };
};

const _decreaseStars = (movie) => {
  return { type: DECREASE_STARS, movie };
};

//////////////////////////////////// THUNKS below:

export const loadMovies = () => {
  return async (dispatch) => {
    const movies = (await axios.get("/api/movies")).data;
    dispatch(_loadMovies(movies));
  };
};

export const createMovie = (name) => {
  return async (dispatch) => {
    const movie = (await axios.post(`/api/movies/`, { name, stars: 3 })).data;
    dispatch(_createMovie(movie));
  };
};

export const deleteMovie = (movie) => {
  return async (dispatch) => {
    await axios.delete(`/api/movies/${movie.id}`);
    dispatch(_deleteMovie(movie));
  };
};

export const increaseStars = (movie) => {
  return async (dispatch) => {
    const updated = (await axios.put(`/api/movies/${movie.id}`, movie)).data;

    dispatch(_increaseStars(movie));
  };
};

export const decreaseStars = (movie) => {
  return async (dispatch) => {
    await axios.put(`/api/movies/${movie.id}`);
    dispatch(_decreaseStars(movie));
  };
};

//////////////////////////////////// REDUCERS below:

const movies = (state = [], action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return action.movies;
    case CREATE_MOVIE:
      return [...state, action.movie];
    case DELETE_MOVIE:
      return [...state].filter((movie) => movie.id !== action.movie.id);
    case INCREASE_STARS:
      return [...state].map((movie) => {
        if (movie.id === action.movie.id) {
          movie.stars++;
          return movie;
        } else {
          return movie;
        }
      });
    case DECREASE_STARS:
      return [...state].map((movie) => {
        if (movie.id === action.movie.id) {
          movie.stars--;
          return movie;
        } else {
          return movie;
        }
      });
    default:
      return state;
  }
};

const reducer = combineReducers({
  movies,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
