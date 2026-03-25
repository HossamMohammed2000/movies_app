// types/movie.ts

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
}

export type MovieDetails = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type MovieCredits = {
  id: number;
  cast: {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
  }[];
  crew: {
    id: number;
    name: string;
    job: string;
    profile_path: string | null;
  }[];
};

export type MovieReviews = {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
};

export type MovieGenres = {
  genres: {
    id: number;
    name: string;
  }[];
};

export type SimilarMovies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type MovieCardProps = {
  movie: Movie;
  priority?: boolean;
};

export type Review = {
  id: string | number;
  author: string;
  content: string;
  url: string;
};