import MovieType from "../types/MovieType";
import { useState } from "react";

type MovieCardProps = {
    movie: MovieType;
}

const cardStyle = {
    backgroundColor: 'lightblue',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '10px',
    color: 'black'
}

export const MovieCard = ({movie}:MovieCardProps) => {
    const handleClick = (message: string) => { console.log(message); }
    const [count, setCount] = useState(0);
    const handleClickCount = () =>  setCount(count + 1);


    return (
        <div style={cardStyle} onClick={handleClickCount}>
            <p>{movie.id}</p>
            <h2 onClick={()=> handleClick(movie.title)}>{movie.title}</h2>
            <p onClick={()=> handleClick(movie.desc)}>{movie.desc}</p>
            <p>click count: {count}</p>
        </div>
    );
}