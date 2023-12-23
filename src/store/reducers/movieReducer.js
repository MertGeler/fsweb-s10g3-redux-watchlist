import {
  RESTORE_MOVIE,
  REMOVE_MOVIE,
  NEXT,
  PREV,
} from "../actions/movieAction";
import { movies } from "../../movies";

const initialState = {
  movies: movies,
  sira: 0,
  disabledNav: "PREV",
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT:
      if (state.sira === state.movies.length - 2) {
        return {
          ...state,
          sira: state.sira + 1,
          disabledNav: "NEXT",
        };
      } else {
        return {
          ...state,
          sira: state.sira + 1,
          disabledNav: "NONE",
        };
      }

    case PREV:
      if (state.sira === 1) {
        return {
          ...state,
          sira: state.sira - 1,
          disabledNav: "PREV",
        };
      } else {
        return {
          ...state,
          sira: state.sira - 1,
          disabledNav: "NONE",
        };
      }

    case REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload.id),
        sira: state.sira === 0 ? 0 : state.sira - 1,
      };

    case RESTORE_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    default:
      return state;
  }
}

export default movieReducer;
