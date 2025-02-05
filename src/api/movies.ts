import { ContentType } from '../types/ContentType';
import { Response } from '../types/ResponseType';

export const getMovies = async (page: number = 1): Promise<ContentType[]> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}&page=${page}`);
  const data: Response = await res.json();
  return data.results.map((movie) => ({
    id: movie.id,
    title: movie.title || movie.name || 'Untitled', 
    desc: movie.overview,
    image: `${import.meta.env.VITE_IMG_BASE_URL}${movie.poster_path}`,
    media_type: movie.media_type || 'movie'
  }));
};