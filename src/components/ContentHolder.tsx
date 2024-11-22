
import { Box, Card, Image, Text } from "@chakra-ui/react"
import { ContentHolderProps, MediaType } from "../types/ContentType"

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
    return (
        <Card.Root 
            maxW="sm" 
            overflow="hidden"
            bg={getBackgroundColor(content.media_type)}
        >
            {pTitle && (
                <Box p={2} bg="black">
                    <Text fontSize="lg" fontWeight="bold">{pTitle}</Text>
                </Box>
            )}
            <Image
                src={content.image}
                alt={content.title}
                width="100%"
                height="auto"
            />
            <Card.Body gap="2">
                <Card.Title
                color='black'
                >{content.title}</Card.Title>
                <Card.Description>{content.desc}</Card.Description>
            </Card.Body>
        </Card.Root>
    )
}