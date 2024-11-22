
export type MediaType = 'tv' | 'movie' | 'person';

export interface ContentType {
    id: number;
    title: string;
    desc: string;
    image: string;
    media_type: MediaType;
}

export interface ContentHolderProps {
    content: ContentType;
    pTitle?: string;
    color?: string;
}