import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Movie(props) {
  const movies = useSelector((state) => state.movieReducer.movies);
  const movie = movies[props.sira];

  return (
    <div className="flex bg-white shadow-lg items-start">
      {movie ? (
        <>
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="max-w-[18rem] w-2/5 block"
          />
          <div className="p-8 flex flex-col gap-4 text-sm">
            <div>
              <h2 className="text-2xl">{movie.title}</h2>
              <p className="italic text-sm">{movie.genres.join(", ")}</p>
            </div>
            <p className="">{movie.plot}</p>
            <div className="flex flex-col sm:flex-row">
              <span className="w-1/3 font-bold">Yönetmen</span>
              <span className="flex-1">{movie.director}</span>
            </div>
            <div className="flex flex-col sm:flex-row">
              <span className="w-1/3 font-bold">Oyuncular</span>
              <span className="flex-1">{movie.actors}</span>
            </div>
            <div className="flex text-sm gap-1 justify-end">
              <span className="block px-2 py-1 rounded-md border border-zinc-400">
                {movie.year}
              </span>
              <span className="block px-2 py-1 rounded-md border border-zinc-400">
                {movie.runtime}dk
              </span>
            </div>
          </div>
        </>
      ) : (
        <p className="text-2xl p-4">
          Bütün filmler listede olabilir ya da film bulunamadı
        </p>
      )}
    </div>
  );
}
