"use client";

import { useState, useEffect } from "react";
import { getMovieReviews } from "@/services/tmdb";
import { Review } from "@/types/movie";

type Props = {
  movieId: number;
};

export default function MovieReviews({ movieId }: Props) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!movieId) return;

    let isMounted = true; // حماية من memory leak

    const fetchReviews = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getMovieReviews(movieId);
        if (isMounted) {
          setReviews(data.results || []);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) setError("Failed to load reviews.");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchReviews();

    return () => {
      isMounted = false;
    };
  }, [movieId]);

  if (loading)
    return <p className="text-gray-400 mt-4">Loading reviews...</p>;

  if (error)
    return <p className="text-red-500 mt-4">{error}</p>;

  if (!reviews.length)
    return <p className="text-gray-400 mt-4">No reviews available.</p>;

  return (
    <div className="mt-6 space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="bg-[#1f1f1f] p-4 rounded-lg">
          <p className="text-sm text-gray-400 mb-2">By: {review.author}</p>
          <p className="text-white line-clamp-6">{review.content}</p>
          {review.url && (
            <a
              href={review.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-sm mt-2 inline-block hover:underline"
            >
              Read full review
            </a>
          )}
        </div>
      ))}
    </div>
  );
}