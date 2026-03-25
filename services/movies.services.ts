import {
  Movie,
  MovieCredits,
  Review,
  MovieGenres,
} from "@/types/movie";
import { fetcher } from "./fetcher";

// ===================
// Movies
// ===================

export async function getPopularMovies(): Promise<Movie[]> {
  const data = await fetcher<{ results: Movie[] }>("/movie/popular", {
    page: 1,
  });
  return data.results;
}

export async function searchMovies(query: string): Promise<Movie[]> {
  if (!query.trim()) return [];
  const data = await fetcher<{ results: Movie[] }>("/search/movie", {
    query,
  });
  return data.results;
}

export async function getTrendingMovies(): Promise<Movie[]> {
  const data = await fetcher<{ results: Movie[] }>(
    "/trending/movie/week",
  );
  return data.results;
}

export async function getTopRatedMovies(): Promise<Movie[]> {
  const data = await fetcher<{ results: Movie[] }>(
    "/movie/top_rated",
    { page: 1 },
  );
  return data.results;
}

export async function getMovieDetails(
  id: number,
): Promise<Movie> {
  if (!id) throw new Error("Movie ID is required");
  return fetcher<Movie>(`/movie/${id}`);
}

export async function getMovieById(id: number): Promise<Movie> {
  if (!id) throw new Error("Movie ID is required");
  return fetcher<Movie>(`/movie/${id}`);
}

export async function getSimilarMovies(
  id: number,
): Promise<Movie[]> {
  if (!id) throw new Error("Movie ID is required");
  const data = await fetcher<{ results: Movie[] }>(
    `/movie/${id}/similar`,
    { page: 1 },
  );
  return data.results;
}

export async function getMoviesByGenre(
  genreId: number,
): Promise<Movie[]> {
  if (!genreId) throw new Error("Genre ID is required");
  const data = await fetcher<{ results: Movie[] }>(
    "/discover/movie",
    {
      with_genres: genreId,
      page: 1,
    },
  );
  return data.results;
}

// ===================
// Credits, Videos, Reviews
// ===================

export async function getMovieCredits(
  id: number,
): Promise<MovieCredits> {
  if (!id) throw new Error("Movie ID is required");
  return fetcher<MovieCredits>(`/movie/${id}/credits`);
}

export async function getMovieVideos(
  id: number,
): Promise<any> {
  if (!id) throw new Error("Movie ID is required");
  return fetcher(`/movie/${id}/videos`);
}

export async function getMovieReviews(
  id: number,
): Promise<Review[]> {
  if (!id) throw new Error("Movie ID is required");
  const data = await fetcher<{ results: Review[] }>(
    `/movie/${id}/reviews`,
    { page: 1 },
  );
  return data.results;
}

// ===================
// Favourites
// ===================

export async function getFavouriteMovies(): Promise<Movie[]> {
  const data = await fetcher<{ results: Movie[] }>(
    "/account/{account_id}/favorite/movies",
  );
  return data.results;
}

// ===================
// Genres
// ===================

export async function getMovieGenres(): Promise<MovieGenres[]> {
  const data = await fetcher<{ genres: MovieGenres[] }>(
    "/genre/movie/list",
  );
  return data.genres;
}