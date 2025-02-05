import { useQuery } from '@tanstack/react-query';
import { searchContent } from '../api/search';

export const useSearch = (query: string, shouldSearch: boolean) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['search', query],
    queryFn: () => searchContent(query),
    enabled: shouldSearch && query.length > 0,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });

  return {
    searchResults: data || [],
    loading: isLoading,
    error
  };
};
