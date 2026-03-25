"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
// import { getMovieCredits } from "@/services/tmdb";
import { MovieCredits as MovieCreditsType } from "@/types/movie";
import { getMovieCredits } from "@/services/movies.services";

type Props = {
  movieId: number;
};

export default function MovieCredits({ movieId }: Props) {
  const [credits, setCredits] = useState<MovieCreditsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!movieId) return;

    setLoading(true);
    setError(null);

    async function fetchCredits() {
      try {
        const data = await getMovieCredits(movieId);
        setCredits(data);
      } catch (err) {
        setError("Failed to load credits");
      } finally {
        setLoading(false);
      }
    }

    fetchCredits();
  }, [movieId]);

  if (loading) return <p>Loading credits...</p>;
  if (error) return <p>{error}</p>;
  if (!credits?.cast?.length) return <p>No credits available.</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Top Cast</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {credits.cast.slice(0, 8).map((actor) => (
          <div key={actor.id} className="bg-[#1f1f1f] p-4 rounded-lg">
           <Image
  src={
    actor.profile_path
      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
      : "/placeholder.jpg"
  }
  alt={actor.name}
  width={200}
  height={300}
  className="rounded-md mb-2"
  unoptimized
/>

            <p className="font-semibold">{actor.name}</p>
            <p className="text-sm text-gray-400">{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
