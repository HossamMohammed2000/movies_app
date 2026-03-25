"use client";

import React, { useEffect, useState, useRef } from "react";
import { Movie } from "@/types/movie";
import MoviesCard from "./MoviesCard";
import SectionTitle from "../ui/SectionTitle";

type Props = {
  movieId: number;
};

export default function SimilarMovies({ movieId }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  // Fetch similar movies
  useEffect(() => {
    async function fetchSimilarMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1`
        );

        if (!res.ok) throw new Error("Failed to fetch similar movies");

        const data = await res.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching similar movies:", error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }

    if (movieId) fetchSimilarMovies();
  }, [movieId]);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [movies]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading similar movies...
      </p>
    );

  if (movies.length === 0)
    return (
      <p className="text-center mt-10 text-gray-400">
        No similar movies found.
      </p>
    );

  return (
    <section className="mt-16 relative">
      <SectionTitle title="Similar Movies" />

      <div className="relative mt-6 flex items-center">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          &#8592;
        </button>

        {/* Slider */}
        <div className="flex justify-center w-full overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeIndex * 260}px)` }}
          >
            {movies.map((movie, index) => (
              <div
                key={movie.id}
                className={`flex-shrink-0 mx-2 transition-transform duration-500 rounded-lg
                  ${
                    index === activeIndex
                      ? "w-64 scale-105 shadow-lg"
                      : "w-44 scale-90 opacity-70 hover:scale-95 hover:opacity-100"
                  }`}
              >
                <MoviesCard movie={movie} priority={index === activeIndex} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}