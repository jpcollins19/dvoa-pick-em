import { connect } from "react-redux";
import store, { deleteMovie, increaseStars, decreaseStars } from "./store";

const Movies = ({
  movies,
  deleteAMovie,
  increaseMovieStars,
  decreaseMovieStars,
}) => {
  return movies.length === 0 ? (
    <div></div>
  ) : (
    <div className="movie-info-cont-full">
      <div className="header-cont">
        <div className="button-header">
          <h4>Remove</h4>
        </div>
        <div className="movie-name-header">
          <h4>Title</h4>
        </div>
        <div className="movie-star-header">
          <img src="./public/pics/star.jpg"></img>
        </div>
        <div className="decrease-star-header">
          <h4>Decrease Rating</h4>
        </div>
        <div className="increase-star-header">
          <h4>Increase Rating</h4>
        </div>
      </div>
      <div className="text-cont">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-info-cont-single">
            <div className="button-cont">
              <button onClick={() => deleteAMovie(movie)}>x</button>
            </div>
            <div className="movie-name-cont">{movie.name}</div>
            <div className="movie-stars-cont">{movie.stars}</div>
            <div className="decrease-star-cont">
              <button
                onClick={() => decreaseMovieStars(movie)}
                disabled={movie.stars === 1}
              >
                -
              </button>
            </div>
            <div className="increase-star-cont">
              <button
                onClick={() => increaseMovieStars(movie)}
                disabled={movie.stars === 5}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAMovie: (movie) => {
      dispatch(deleteMovie(movie));
    },
    increaseMovieStars: (movie) => {
      dispatch(increaseStars(movie));
    },
    decreaseMovieStars: (movie) => {
      dispatch(decreaseStars(movie));
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(Movies);
