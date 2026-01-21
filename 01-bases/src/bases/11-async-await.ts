import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'JbVV4B2RtjNCcVo4ByRg4yBEg0AhmH6O';

export const getImageUrl = async (): Promise<string> => {

    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }`);

    const { data }: GiphyRandomResponse = await response.json();

    return data.images.original.url;
}