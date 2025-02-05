import { useQuery } from '@tanstack/react-query';
import { ContentTypeOption } from '../types/ContentType';
import { getMovies } from '../api/movies';
import { getTVShows } from '../api/tv';
import { getPeople } from '../api/person';

const fetchContentByType = async (contentType: ContentTypeOption, page: number) => {
  switch(contentType) {
    case 'movie':
      return await getMovies(page);
    case 'tv':
      return await getTVShows(page);
    case 'person':
      return await getPeople(page);
    default:
      return [];
  }
};

export const useContent = (contentType: ContentTypeOption, page: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['content', contentType, page],
    queryFn: () => fetchContentByType(contentType, page),
    staleTime: 5 * 60 * 1000, 
    gcTime: 30 * 60 * 1000,
  });

  return { 
    content: data || [], 
    loading: isLoading,
    error 
  };
};