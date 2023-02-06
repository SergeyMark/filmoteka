import { featchMovie, featchOnSearchedMovie } from "./apiCreated";
import { movieCreateCard } from "./movieCreateCard";

const formSearcher = document.querySelector('.search-form');

formSearcher.addEventListener('submit', onSearchBtnClick);

function onSearchBtnClick(event){
    event.preventDefault();

    searchQuery = event.currentTarget.search.value.trim();
    
    featchOnSearchedMovie(searchQuery).then(response =>
        movieCreateCard(response.results)   
    ).catch(error => console.log(error));
};