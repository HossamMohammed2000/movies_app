"use client";

import { useEffect, useState } from "react";
import { Movie } from "@/types/movie";
import { useFavourites } from "@/context/favouriteContext";
import MoviesCard from "@/_Components/movies/MoviesCard";
import Loader from "@/_Components/ui/Loader";
import { getFavouriteMovies } from "@/services/movies.services"; // استخدم الدالة الصحيحة

export default function FavouritesPage() {
  const { favourites } = useFavourites();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const results = await Promise.all(
          favourites.map((id) => getFavouriteMovies(id)),
        );
        setMovies(results.filter((movie): movie is Movie => !!movie));
      } catch (error) {
        console.error("Failed to fetch favourite movies", error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    if (favourites?.length) {
      fetchMovies();
    } else {
      setMovies([]);
    }
  }, [favourites]);

  return (
    <div className="mt-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        My Favourite Movies
      </h1>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader />
        </div>
      ) : movies.length === 0 ? (
        <p className="text-gray-400">No favourite movies yet</p>
      ) : (
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {movies.map((movie) =>
            movie?.id ? <MoviesCard key={movie.id} movie={movie} /> : null,
          )}
        </div>
      )}
    </div>
  );
}
