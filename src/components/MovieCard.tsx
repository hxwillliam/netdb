import MovieType from "../types/MovieType";
import { Card, Image } from "@chakra-ui/react"

type MovieCardProps = {
    movie: MovieType;
}

export const MovieCard = ({movie}:MovieCardProps) => {

    return (
        <Card.Root maxW="sm" overflow="hidden">
            <Image
                src={movie.image}
                alt={movie.title}
                width="100%"
                height="auto"
            />
            <Card.Body gap="2">
                <Card.Title> {movie.title} </Card.Title>
                <Card.Description>
                    {movie.desc}
                </Card.Description>
            </Card.Body>
        </Card.Root>
    );
}