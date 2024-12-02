import { Box, Card, Image, Text, Flex } from "@chakra-ui/react"
import { ContentHolderProps, MediaType } from "../types/ContentType"
import { keyframes } from "@emotion/react"
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogCloseTrigger,
} from "@/components/ui/dialog"
import { useNavigate } from "react-router-dom"

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const getBackgroundColor = (mediaType: MediaType): string => {
    switch (mediaType) {
        case 'tv':
            return 'green.200';
        case 'movie':
            return 'blue.200';
        case 'person':
            return 'purple.200';
        default:
            return 'black.100';
    }
}

export const ContentHolder = ({ content, pTitle }: ContentHolderProps) => {
    const navigate = useNavigate();

    if (!content) return null;

    const handleNavigate = () => {
        navigate(`/${content.media_type}/${content.id}`);
    };

    return (
        <DialogRoot size="xl" placement="center" motionPreset="slide-in-bottom">
            <DialogTrigger asChild>
                <Card.Root 
                    maxW="sm" 
                    overflow="hidden"
                    bg={getBackgroundColor(content.media_type)}
                    css={{
                        animation: `${slideIn} 0.5s ease-out`,
                        animationDelay: 'calc(0.1s * var(--chakra-place-self-start))',
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        '&:hover': {
                            transform: 'scale(1.02)'
                        }
                    }}
                    onClick={handleNavigate}
                    role="button"
                    aria-label={`View details for ${content.title}`}
                >
                    {pTitle && (
                        <Box p={2} bg="black">
                            <Text fontSize="lg" fontWeight="bold" color="white">
                                {pTitle}
                            </Text>
                        </Box>
                    )}
                    <Image
                        src={content.image}
                        alt={content.title}
                        width="100%"
                        height="auto"
                        loading="lazy"
                    />
                    <Card.Body gap="2">
                        <Card.Title color='black'>{content.title}</Card.Title>
                        <Card.Description style={{ 
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical'
                        }}>
                            {content.desc}
                        </Card.Description>
                    </Card.Body>
                </Card.Root>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{content.title}</DialogTitle>
                    <DialogCloseTrigger aria-label="Close dialog" />
                </DialogHeader>
                <DialogBody>
                    <Flex gap={4} direction={{ base: 'column', md: 'row' }}>
                        <Image
                            src={content.image}
                            alt={content.title}
                            maxW={{ base: '100%', md: '300px' }}
                            borderRadius="md"
                            objectFit="cover"
                        />
                        <Box flex="1">
                            <Text 
                                fontSize="lg" 
                                fontWeight="bold" 
                                mb={2}
                                color={getBackgroundColor(content.media_type)}
                            >
                                {content.media_type.toUpperCase()}
                            </Text>
                            <Text>{content.desc}</Text>
                            {content.id && (
                                <Text mt={4} fontSize="sm" color="gray.500">
                                    ID: {content.id}
                                </Text>
                            )}
                        </Box>
                    </Flex>
                </DialogBody>
            </DialogContent>
        </DialogRoot>
    )
}