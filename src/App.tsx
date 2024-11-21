import { useEffect, useState } from 'react';
import './App.css';
import { ContentHolder } from './components/ContentHolder';
import { getMovies } from './api/movies';
import { ContentType } from './types/ContentType';
import { Button, Flex, SimpleGrid, Box } from '@chakra-ui/react';

function App() {
  const [content, setContent] = useState<ContentType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchContent = async () => {
      const data = await getMovies(page);
      setContent(data);
      setLoading(false);
    };
    fetchContent();
  }, [page]);

  if (loading) return <div>Loading...</div>;

  return (
    <Box p={4}>
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