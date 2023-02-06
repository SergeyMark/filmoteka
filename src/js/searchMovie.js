import { featchMovie, featchOnSearchedMovie } from "./apiCreated";
import { movieCreateCard } from "./movieCreateCard";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formSearcher = document.querySelector('.search-form');

const emptyArray = [];

formSearcher.addEventListener('submit', onSearchBtnClick);

function onSearchBtnClick(event){
    event.preventDefault();

    searchQuery = event.currentTarget.search.value.trim();

    if (searchQuery === '') {
        Notify.failure('please enter the name of the movie', {
                position: 'center-center',
                width: '500px',
                borderRadius: '0px',
                opacity: 1,
                backOverlayColor: 'rgba(0, 0, 0, 0.5)',
                fontSize: '25px',
                cssAnimationStyle: 'fade',
                backOverlay: true,
                failure: {
                    background: 'rgba(255, 255, 255, 0)',
                    textColor: '#000',
                    childClassName: 'notiflix-notify-failure',
                    notiflixIconColor: 'rgba(0,0,0,0.2)',
                    fontAwesomeClassName: 'fas fa-times-circle',
                    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
                    backOverlayColor: 'rgba(255,85,73,0.4)',
                },
        });
    }
    
    featchOnSearchedMovie(searchQuery).then(response =>{

        console.log(response.results);

        if (response.results.length === 0) {
            Notify.failure('Something went wrong', {
                position: 'center-center',
                width: '500px',
                borderRadius: '0px',
                opacity: 1,
                backOverlayColor: 'rgba(0, 0, 0, 0.5)',
                fontSize: '40px',
                cssAnimationStyle: 'fade',
                backOverlay: true,
                failure: {
                    background: 'rgba(255, 255, 255, 0)',
                    textColor: '#000',
                    childClassName: 'notiflix-notify-failure',
                    notiflixIconColor: 'rgba(0,0,0,0.2)',
                    fontAwesomeClassName: 'fas fa-times-circle',
                    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
                    backOverlayColor: 'rgba(255,85,73,0.4)',
                },
            });
        }

        movieCreateCard(response.results);  
    
    }).catch(error => console.log(error));
};