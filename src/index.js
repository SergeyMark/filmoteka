import { featchMovie } from "./js/apiCreated";
import { movieCreateCard } from "./js/movieCreateCard";

const body = document.querySelector('body');

if(body){
    featchMovie().then(card => {
        console.log(card.results);
    })
}

// movieCreateCard();

