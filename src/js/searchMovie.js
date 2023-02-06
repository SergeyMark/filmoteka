import { featchMovie, featchOnSearchedMovie } from "./apiCreated";
import { movieCreateCard } from "./movieCreateCard";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formSearcher = document.querySelector('.search-form');

formSearcher.addEventListener('submit', onSearchBtnClick);

function onSearchBtnClick(event){
    event.preventDefault();

    searchQuery = event.currentTarget.search.value.trim();

    if (searchQuery === '') {
        Notify.failure('please enter the name of the movie');
    }
    
    featchOnSearchedMovie(searchQuery).then(response =>

        movieCreateCard(response.results)   
    
    ).catch(error => console.log(error));
};