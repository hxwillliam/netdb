import { useEffect, useState } from 'react';
import './App.css';
import { ContentHolder } from './components/ContentHolder';
import { getMovies } from './api/movies';
import { getTVShows } from './api/tv';
import { getPeople } from './api/person';
import { ContentType } from './types/ContentType';
import { 
  Button, 
  Flex, 
  SimpleGrid, 
  Box,
} from '@chakra-ui/react';

type ContentTypeOption = 'movie' | 'tv' | 'person';

function App() {
  const [content, setContent] = useState<ContentType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [contentType, setContentType] = useState<ContentTypeOption>('movie');

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

  if (loading) return <div>Loading...</div>;

  return (
    <Box p={4}>
      <Flex justify="center" mb={4}>
        <select
          value={contentType}
          onChange={(e) => {
            setContentType(e.target.value as ContentTypeOption);
            setPage(1);
          }}
          style={{
            width: 'auto',
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #e2e8f0',
            backgroundColor: 'white',
            fontSize: '16px',
            color: 'black'
          }}
        >
          <option value="movie">Movies</option>
          <option value="tv">TV Shows</option>
          <option value="person">People</option>
        </select>
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} gap={4}>
        {content.map((item) => (
          <ContentHolder 
            key={item.id} 
            content={item}
            pTitle={`${item.media_type.toUpperCase()} Content`}
          />
        ))}
      </SimpleGrid>
      
      <Flex justify="center" mt={4} gap={2}>
        <Button 
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button 
          onClick={() => setPage(p => p + 1)}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
}

export default App;