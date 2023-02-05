const cardGallery = document.querySelector('.movie-gallery');

export function movieCreateCard(array) {
    cardGallery.innerHTML = array.map(card => 
        `<div class="card">
            <img src="" alt="" class="card__img">
            <h2 class="card__title"></h2>
            <p class="card__subtext"></p>
        </div>`  
    ).join('');
}