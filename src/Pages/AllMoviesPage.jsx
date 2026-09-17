import MovieCard from "../Components/AllMovies/MovieCard";
import Container from "../Components/Shared/Container";
import LoadingSpinner from "../Components/Shared/LoadingSpinner";
import useGetMovies from "../Hooks/useGetMovies";

export default function AllMoviesPage() {
  const { movies, error, loading, searchName, setSearchName } = useGetMovies();

  const renderResults = () => {
    if (loading) {
      return <LoadingSpinner />;
    }

    if (error) {
      return (
        <div className="text-lg font-medium text-center py-20">
          Something went wrong. Please try again later.
        </div>
      );
    }

    if (movies.length === 0) {
      return (
        <div className="text-center py-20 space-y-2">
          <p className="text-lg font-medium">
            No results found{searchName.trim() && ` for "${searchName.trim()}"`}
          </p>
          <p className="opacity-60">
            Check the spelling or try a different title.
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-7 gap-y-10 mt-15 mb-20">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  };

  return (
    <Container>
      <div className="my-10 w-full flex items-center justify-center">
        <label className="input outline-none rounded-full w-100">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            type="search"
            placeholder="search by movie title"
          />
        </label>
      </div>

      <div aria-live="polite" aria-busy={loading}>
        {renderResults()}
      </div>
    </Container>
  );
}
