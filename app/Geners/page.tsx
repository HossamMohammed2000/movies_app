
import MovieGenresComponent from "../../_Components/movies/MovieGenresComponent";

export default function GenresPage() {
  
  return (
    <main className="max-w-5xl mx-auto p-6 text-white">
        <MovieGenresComponent genres={{genres: []}}/>
    </main>
  );
  
}