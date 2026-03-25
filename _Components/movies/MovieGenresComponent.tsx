"use client";

import Loader from "@/_Components/ui/Loader";
import { MovieGenres } from "@/types/movie";

function MovieGenresComponent({ genres }: { genres: MovieGenres }) {
  if (!genres?.genres?.length) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Movie Genres</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {genres.genres.map((genre) => (
          <div key={genre.id} className="bg-zinc-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold">{genre.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieGenresComponent;
