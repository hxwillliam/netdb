import { ContentType } from '../types/ContentType';
import { Response } from '../types/ResponseType';
import { API_KEY } from './keys';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const getTVShows = async (page: number = 1): Promise<ContentType[]> => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&page=${page}`);
        const data: Response = await res.json();
        return data.results.map((show) => ({
            id: show.id,
            title: show.name || 'Untitled',
            desc: show.overview,
            image: `${IMG_BASE_URL}${show.poster_path}`,
            media_type: 'tv'
        }));
    } catch (error) {
        console.log("Error:", error);
        return [];
    }
};