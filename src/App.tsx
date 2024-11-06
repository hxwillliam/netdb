import { getMovies } from './api/movies'
import './App.css'
import { MovieCard } from './components/MovieCard'

function App() {
  const movieMock = getMovies();

  return (
    <>
      {movieMock.map((movie) => {
          return <MovieCard key={movie.id} movie={movie}/>
        })
      }
    </>
  )
}

export default App