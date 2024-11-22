import { useState, useEffect } from 'react';
import { ContentType, ContentTypeOption } from '../types/ContentType';
import { getMovies } from '../api/movies';
import { getTVShows } from '../api/tv';
import { getPeople } from '../api/person';

export const useContent = (contentType: ContentTypeOption, page: number) => {
  const [content, setContent] = useState<ContentType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      let data: ContentType[] = [];
      
      switch(contentType) {
        case 'movie':
          data = await getMovies(page);
          break;
        case 'tv':
          data = await getTVShows(page);
          break;
        case 'person':
          data = await getPeople(page);
          break;
      }
      
      setContent(data);
      setLoading(false);
    };
    fetchContent();
  }, [page, contentType]);

  return { content, loading };
};