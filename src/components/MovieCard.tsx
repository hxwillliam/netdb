type MovieCardProps = {
    MovieId: number;
    MovieTitle: string;
}

const cardStyle = {
    backgroundColor: 'lightblue',
    borderRadius: '10px',
    color: 'black'
}

export const MovieCard = (props:MovieCardProps) => {
 
    return (
        <div style={cardStyle}>
            <p>{props.MovieId}</p>
            <h2>{props.MovieTitle}</h2>
        </div>
    );
}