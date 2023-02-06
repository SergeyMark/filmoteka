import { featchMovie } from "./js/apiCreated";
import { movieCreateCard } from "./js/movieCreateCard";
import { featchOnClickdMovie } from "./js/apiCreated";

const body = document.querySelector('body');

body.onload = function() {
    featchMovie().then(card => {
        console.log(card);
        movieCreateCard(card.results);

        const onClickCard = document.querySelector('.movie-gallery');
        onClickCard.addEventListener('click', onClickCardMovie)
        function onClickCardMovie(event){
            
        const idCardMovie = event.target;
        
        if (idCardMovie.tagName === 'IMG') {
            featchOnClickdMovie(idCardMovie.parentNode.getAttribute('data-modal')).then(modalCard => 
                console.log(modalCard)
            );
        }

            
        }    
        
        

    }).catch (error => console.log(error));
};


    


