export interface Game {
    name: string;
    category: string;
    url_game: string;
    url_video: string;
    url_image: string;
    description: string;
}

export interface GameUpdate {
    name?: string;
    category?: string;
    url_game?: string;
    url_video?: string;
    url_image?: string;
    description?: string;
}