
import { Box, Button, Card, Image, Text } from "@chakra-ui/react"
import { ContentHolderProps, MediaType } from "../types/ContentType"

const getBackgroundColor = (mediaType: MediaType): string => {
    switch (mediaType) {
        case 'tv':
            return 'blue.100';
        case 'movie':
            return 'green.100';
        case 'person':
            return 'purple.100';
        default:
            return 'gray.100';
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
                <Box p={2} bg="gray.200">
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
                <Card.Title>{content.title}</Card.Title>
                <Card.Description>{content.desc}</Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
                <Button variant="solid">Open</Button>
            </Card.Footer>
        </Card.Root>
    )
}