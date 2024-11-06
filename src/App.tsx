import { useState } from 'react';
import './App.css';
import { MovieCard } from './components/MovieCard';
import { getMovies } from './api/movies';
import MovieType from './types/MovieType';

function App() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const fetchMovies = async () => {
    const movieData = await getMovies();
    setMovies(movieData);
  };

  fetchMovies();

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