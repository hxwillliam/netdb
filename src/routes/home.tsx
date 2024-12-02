
import { useState } from 'react';
import { ContentTypeSelector } from '../components/ContentTypeSelector';
import { ContentHolder } from '../components/ContentHolder';
import { Pagination } from '../components/Pagination';
import { useContent } from '../hooks/useContent';
import { ContentTypeOption } from '../types/ContentType';
import { Flex, SimpleGrid } from '@chakra-ui/react';

export const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [contentType, setContentType] = useState<ContentTypeOption>('movie');
  const { content, loading } = useContent(contentType, page);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Flex justify="center" mb={4}>
        <ContentTypeSelector 
          value={contentType}
          onChange={(value) => {
            setContentType(value);
            setPage(1);
          }}
        />
      </Flex>
      
      <SimpleGrid
        columns={3}
        gap={3}
        maxW="1200px"
        mx="auto"
        justifyItems="center"
      >
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
    </>
  );
};