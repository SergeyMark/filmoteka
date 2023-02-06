import { featchMovie, featchOnSearchedMovie } from "./apiCreated";
import { movieCreateCard } from "./movieCreateCard";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formSearcher = document.querySelector('.search-form');

formSearcher.addEventListener('submit', onSearchBtnClick);

function onSearchBtnClick(event){
    event.preventDefault();

    searchQuery = event.currentTarget.search.value.trim();

    if (searchQuery === '') {
        Notify.failure('please enter the name of the movie', {
            position: 'center-center',
            width: '500px',
            borderRadius: '0px',
            opacity: 0.8,
            backOverlayColor: 'rgba(0, 0, 0, 0.5)',
            fontSize: '25px',
            cssAnimationStyle: 'zoom',
        });
    }
    
    featchOnSearchedMovie(searchQuery).then(response =>

        movieCreateCard(response.results)   
    
    ).catch(error => console.log(error));
};