import { ContentType } from '../types/ContentType';
import { Response } from '../types/ResponseType';

export const getTVShows = async (page: number = 1): Promise<ContentType[]> => {
  const res = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`);
  const data: Response = await res.json();
  return data.results.map((show) => ({
    id: show.id,
    title: show.name || 'Untitled',
    desc: show.overview,
    image: `${import.meta.env.VITE_IMG_BASE_URL}${show.poster_path}`,
    media_type: 'tv'
  }));
};