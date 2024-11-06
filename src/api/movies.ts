import MovieType from '../types/MovieType';
import { API_URL } from './keys';
import { Response } from '../types/ResponseType';


export const getMovies = async (): Promise<MovieType[]> => {
    try {
        const res = await fetch(API_URL);
        const data: Response = await res.json();
        return data.results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            desc: movie.overview
        }));
    } catch (error) {
        console.log("Error:", error);
        return [];
    }
};