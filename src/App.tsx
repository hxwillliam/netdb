import { useEffect, useState } from 'react';
import './App.css';
import { MovieCard } from './components/MovieCard';
import { getMovies } from './api/movies';
import MovieType from './types/MovieType';

function App() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await getMovies();
      setMovies(movieData);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie}/>
        })
      }
    </>
  )
}

export default App;