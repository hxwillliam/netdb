import { ContentType } from '../types/ContentType';
import { Response } from '../types/ResponseType';

export const getPeople = async (page: number = 1): Promise<ContentType[]> => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`);
        const data: Response = await res.json();
        return data.results.map((person) => ({
            id: person.id,
            title: person.name || 'Unknown',
            desc: '',
            image: person.profile_path ? `${import.meta.env.VITE_IMG_BASE_URL}${person.profile_path}` : import.meta.env.VITE_IMAGE_PLACEHOLDER,
            media_type: 'person'
        }));
    } catch (error) {
        console.error("Error fetching people:", error);
        return [];
    }
};