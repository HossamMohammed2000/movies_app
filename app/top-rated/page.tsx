import { getTopRatedMovies } from "@/services/movies.services";
import MovieGrid from "@/_Components/movies/MovieGrid";

export default async function TopRatedPage() {
  const movies = await getTopRatedMovies();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Top Rated Movies</h1>
      <MovieGrid movies={movies} />
    </div>
  );
}