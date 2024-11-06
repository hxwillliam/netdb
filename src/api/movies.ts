import MovieType from '../types/MovieType';

export const getMovies = (): MovieType[] => {
    const movieMock: MovieType[] = [
        {
          id: 0.01,
          title: 'inception',
          desc: 'xyz'
        },
        {
          id: 0.002,
          title: 'edge of tomorrow',
          desc: 'abc'
        },
        {
          id: 0.003,
          title: 'the matrix',
          desc: 'def'
        }
      ]
    return movieMock;
}