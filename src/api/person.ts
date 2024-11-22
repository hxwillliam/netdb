import { ContentType } from '../types/ContentType';
import { Response } from '../types/ResponseType';
import { API_KEY, IMG_BASE_URL, imagePlaceholder } from './keys';

export const getPeople = async (page: number = 1): Promise<ContentType[]> => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${API_KEY}&page=${page}`);
        const data: Response = await res.json();
        return data.results.map((person) => ({
            id: person.id,
            title: person.name || 'Unknown',
            desc: '',
            image: person.profile_path ? `${IMG_BASE_URL}${person.profile_path}` : imagePlaceholder,
            media_type: 'person'
        }));
    } catch (error) {
        console.error("Error fetching people:", error);
        return [];
    }
};