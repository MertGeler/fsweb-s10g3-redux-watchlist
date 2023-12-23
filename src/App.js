import { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { next, prev, removeMovie } from "./store/actions/movieAction";
import { addFavorite } from "./store/actions/favoriteAction";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { sira, disabledNav, movies } = useSelector(
    (state) => state.movieReducer
  );
  const favMovies = useSelector((state) => state.favoriteReducer.favorites);

  function sonrakiFilm() {
    dispatch(next());
  }
  function oncekiFilm() {
    dispatch(prev());
  }

  function listeyeEkle() {
    dispatch(addFavorite(movies[sira]));
    dispatch(removeMovie(movies[sira]));
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={oncekiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500
              disabled:opacity-50"
              disabled={disabledNav === "PREV"}
            >
              Önceki
            </button>
            <button
              onClick={sonrakiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500 disabled:opacity-50"
              disabled={disabledNav === "NEXT"}
            >
              Sıradaki
            </button>
            <button
              onClick={listeyeEkle}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} movie={movie} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
