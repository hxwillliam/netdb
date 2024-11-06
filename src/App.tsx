
import './App.css'
import { MovieCard } from './components/MovieCard'
import MovieType from './types/MovieType'

function App() {

  const movieMock: MovieType[] = [
    {
      id: 0.01,
      title: 'inception'
    },
    {
      id: 0.002,
      title: 'edge of tomorrow'
    },
    {
      id: 0.003,
      title: 'the matrix'
    }
  ]
  return (
    <>
      {movieMock.map((movie) => {
          return <MovieCard MovieId={movie.id} MovieTitle={movie.title} />
        })
      }
    </>
  )
}

export default App
