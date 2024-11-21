
import { MediaType } from './ContentType';

export type Response = {
    results: {
        id: number;
        title?: string;
        name?: string;
        overview: string;
        poster_path: string;
        media_type: MediaType;
    }[];
    page: number;
    total_pages: number;
}