import { ContentType } from '../types/ContentType';
import { Response } from '../types/ResponseType';
import { API_URL, IMG_BASE_URL } from './keys';

export const getMovies = async (page: number = 1): Promise<ContentType[]> => {
  const res = await fetch(`${API_URL}&page=${page}`);
  const data: Response = await res.json();
  return data.results.map((movie) => ({
    id: movie.id,
    title: movie.title || movie.name || 'Untitled', 
    desc: movie.overview,
    image: `${IMG_BASE_URL}${movie.poster_path}`,
    media_type: movie.media_type || 'movie'
  }));
};