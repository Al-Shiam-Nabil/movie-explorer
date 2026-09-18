import { useEffect, useState } from "react";

export default function useGetMovies() {
  const [movies, setMovies] = useState([]);
  const [searchName, setSearchName] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const url = searchName.trim()
          ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchName)}`
          : `https://api.tvmaze.com/shows`;

        const result = await fetch(url);

        if (!result.ok) {
          throw new Error(`my error : ${result.status}`);
        }

        const data = await result.json();
        if (searchName.trim()) {
          setMovies(data.map((item) => item.show));
        } else {
          setMovies(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchMovies();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchName]);

  return {
    movies,
    setMovies,
    loading,
    setLoading,
    error,
    setError,
    searchName,
    setSearchName,
  };
}
