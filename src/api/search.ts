import { ContentType } from '../types/ContentType';
import { Response } from '../types/ResponseType';

export const searchContent = async (query: string): Promise<ContentType[]> => {
  if (!query) return [];
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
    }
  };

  const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, options);
  const data: Response = await res.json();
  
  return data.results.map(item => ({
    id: item.id,
    title: item.title || item.name || 'Untitled',
    desc: item.overview || '',
    image: item.poster_path || item.profile_path 
      ? `${import.meta.env.VITE_IMG_BASE_URL}${item.poster_path || item.profile_path}`
      : import.meta.env.VITE_IMAGE_PLACEHOLDER,
    media_type: item.media_type
  }));
};
