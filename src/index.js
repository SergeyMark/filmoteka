import { featchMovie } from "./js/apiCreated";
import { movieCreateCard } from "./js/movieCreateCard";

const body = document.querySelector('body');

body.onload = function() {
    featchMovie().then(card => {
        console.log(card);
        movieCreateCard(card.results);
    }).catch (error => console.log(error));
};

    


