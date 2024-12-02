import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, Image, Text, Flex, Button } from '@chakra-ui/react';
import { ContentType } from '../types/ContentType';
import { getMovies } from '../api/movies';
import { getTVShows } from '../api/tv';
import { getPeople } from '../api/person';

export const Detail = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState<ContentType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      if (!type || !id) return;
      setLoading(true);
      let data;
      switch (type) {
        case 'movie':
          data = await getMovies();
          break;
        case 'tv':
          data = await getTVShows();
          break;
        case 'person':
          data = await getPeople();
          break;
      }
      const item = data?.find(item => item.id === parseInt(id));
      setContent(item || null);
      setLoading(false);
    };
    fetchContent();
  }, [type, id]);

  if (loading) return <div>Loading...</div>;
  if (!content) return <div>Content not found</div>;

  return (
    <Box p={4}>
      <Button onClick={() => navigate(-1)} mb={4}>Back</Button>
      <Flex gap={4}>
        <Image
          src={content.image}
          alt={content.title}
          maxW="300px"
          borderRadius="md"
        />
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={2}>
            {content.title}
          </Text>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            {content.media_type.toUpperCase()}
          </Text>
          <Text>{content.desc}</Text>
        </Box>
      </Flex>
    </Box>
  );
};