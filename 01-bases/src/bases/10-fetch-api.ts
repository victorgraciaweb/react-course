import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'JbVV4B2RtjNCcVo4ByRg4yBEg0AhmH6O';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ API_KEY }`);

myRequest.then((response) => response.json())
.then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    console.log(imageUrl);
})
.catch((err) =>{
    console.error(err);
});