
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
                        <Card.Title color='black'>{content.title}</Card.Title>
                        <Card.Description>{content.desc}</Card.Description>
                    </Card.Body>
                </Card.Root>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{content.title}</DialogTitle>
                    <DialogCloseTrigger />
                </DialogHeader>
                <DialogBody>
                    <Flex gap={4}>
                        <Image
                            src={content.image}
                            alt={content.title}
                            maxW="300px"
                            borderRadius="md"
                        />
                        <Box>
                            <Text fontSize="lg" fontWeight="bold" mb={2}>
                                {content.media_type.toUpperCase()}
                            </Text>
                            <Text>{content.desc}</Text>
                        </Box>
                    </Flex>
                </DialogBody>
            </DialogContent>
        </DialogRoot>
    )
}