import { useState } from 'react';
import './App.css';
import { ContentHolder } from './components/ContentHolder';
import { ContentTypeSelector } from './components/ContentTypeSelector';
import { Pagination } from './components/Pagination';
import { useContent } from './hooks/useContent';
import { ContentTypeOption } from './types/ContentType';
import { Flex, SimpleGrid, Box } from '@chakra-ui/react';

function App() {
  const [page, setPage] = useState<number>(1);
  const [contentType, setContentType] = useState<ContentTypeOption>('movie');
  const { content, loading } = useContent(contentType, page);

  if (loading) return <div>Loading...</div>;

  return (
    <Box p={4}>
      <Flex justify="center" mb={4}>
        <ContentTypeSelector 
          value={contentType}
          onChange={(value) => {
            setContentType(value);
            setPage(1);
          }}
        />
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
      
      <Pagination 
        page={page}
        onPageChange={setPage}
      />
    </Box>
  );
}

export default App;