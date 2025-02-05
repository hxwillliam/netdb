import { useState } from 'react';
import './App.css';
import { ContentHolder } from './components/ContentHolder';
import { ContentTypeSelector } from './components/ContentTypeSelector';
import { Pagination } from './components/Pagination';
import { useContent } from './hooks/useContent';
import { useSearch } from './hooks/useSearch';
import { ContentTypeOption } from './types/ContentType';
import { Flex, SimpleGrid, Box, Input, Button, Stack } from '@chakra-ui/react';

function App() {
  const [page, setPage] = useState<number>(1);
  const [contentType, setContentType] = useState<ContentTypeOption>('movie');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [shouldSearch, setShouldSearch] = useState<boolean>(false);
  
  const { content, loading: contentLoading } = useContent(contentType, page);
  const { searchResults, loading: searchLoading } = useSearch(searchQuery, shouldSearch);

  const loading = contentLoading || searchLoading;
  const displayContent = shouldSearch ? searchResults : content;

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShouldSearch(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  if (loading) return <div>Loading...</div>;

  return (  
    <Box p={4}>
      <Flex direction="column" gap={4} mb={4}>
        <Stack direction="row" gap={2}>
          <Input
            placeholder="Search movies, TV shows, or people..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShouldSearch(false);
            }}
            onKeyPress={handleKeyPress}
            variant="outline"
            size="lg"
          />
          <Button size="lg" onClick={handleSearch}>
            Search
          </Button>
        </Stack>
        
        {!shouldSearch && (
          <ContentTypeSelector 
            value={contentType}
            onChange={(value) => {
              setContentType(value);
              setPage(1);
            }}
          />
        )}
      </Flex>

      <SimpleGrid columns={[1, 2, 3]} gap={4}>
        {displayContent.map((item) => (
          <ContentHolder 
            key={item.id} 
            content={item}
            pTitle={`${item.media_type.toUpperCase()} Content`}
          />
        ))}
      </SimpleGrid>
      
      {!shouldSearch && (
        <Pagination 
          page={page}
          onPageChange={setPage}
        />
      )}
    </Box>
  );
}

export default App;