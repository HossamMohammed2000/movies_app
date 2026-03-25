"use client";

import Image from "next/image";
import { Movie } from "@/types/movie";
import Link from "next/link";
import { useFavourites } from "@/context/favouriteContext";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const { favourites, toggleFavourite } = useFavourites();

  const isFavourite = favourites.includes(movie.id);

  return (
    <div
      className="
        group 
        relative 
        rounded-xl 
        overflow-hidden 
        bg-zinc-900
        transition-all 
        duration-300 
        hover:scale-105 
        hover:shadow-2xl
      "
    >
      {/* Rating Badge */}
      <div
        className="
          absolute top-2 right-2
          bg-yellow-400 text-black
          text-xs font-bold
          px-2 py-1 rounded-lg
          z-20
        "
      >
        ⭐ {movie.vote_average?.toFixed(1)}
      </div>

      {/* Favourite Button */}
      <button
        onClick={() => toggleFavourite(movie.id)}
        className="
          absolute top-2 left-2
          bg-black/60
          text-white
          text-xs
          px-2 py-1
          rounded-lg
          z-20
          hover:bg-red-600
          transition
        "
      >
        {isFavourite ? "❤️" : "🤍"}
      </button>

      <Link href={`/movies/${movie.id}`}>
        <div className="relative w-full aspect-[2/3]">
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/placeholder.png"
            }
            alt={movie.title}
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0 
              bg-black/70 
              opacity-0 
              group-hover:opacity-100 
              transition duration-300
              flex items-end
              p-4
            "
          >
            <div>
              <h3 className="text-sm font-semibold line-clamp-2">
                {movie.title}
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                {movie.release_date?.split("-")[0]}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}