import { Movie } from "@/types/movie";

export default function MovieModal({
  movie,
  onClose,
}: {
  movie: Movie;
  onClose: () => void;
}) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-zinc-900 max-w-2xl w-full rounded-lg p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-xl">
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
        <p className="text-gray-300">{movie.overview}</p>
      </div>
    </div>
  );
}