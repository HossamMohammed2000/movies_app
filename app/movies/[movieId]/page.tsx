// app/movies/[movieId]/page.tsx
import Image from "next/image";
import { Movie } from "@/types/movie";
import { PageProps } from "@/types/page-props";

export default async function MoviePage({ params }: PageProps) {
  const movieId = params.movieId; // ✅ دلوقتي Server Component params object عادي
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;

  if (!movieId || !API_KEY) {
    return <div className="min-h-screen flex items-center justify-center text-white text-2xl">Invalid movie request.</div>;
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <div className="min-h-screen flex items-center justify-center text-white text-2xl">Movie not found.</div>;
  }

  const movie: Movie = await res.json();

  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold mb-6">{movie.title}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <Image
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/placeholder.jpg"}
            alt={movie.title || "Movie Poster"}
            width={500}
            height={750}
            className="rounded-2xl shadow-lg"
            priority
            unoptimized={!movie.poster_path}
          />
        </div>
        <div className="md:w-2/3 space-y-4 text-lg">
          <p><span className="font-semibold">Release Date:</span> {movie.release_date || "Unknown"}</p>
          <p><span className="font-semibold">Rating:</span> {movie.vote_average ?? "N/A"} ⭐</p>
          <p className="leading-relaxed text-gray-300">{movie.overview || "No overview available."}</p>
        </div>
      </div>
    </div>
  );
}