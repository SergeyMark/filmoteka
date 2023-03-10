const cardGallery = document.querySelector('.movie-gallery');

export function movieCreateCard(array) {
   const markUp = array.map(card => 
        `<div class="card" data-modal="${card.id}">
            <img src="https://image.tmdb.org/t/p/w500${card.poster_path}" alt="${card.original_title}" class="card__img">
            <div class="wrap-text">
                <h2 class="card__title">${card.title}</h2>
                <p class="card__subtext">${card.release_date}</p>
            </div>
        </div>`  
   ).join('');

    cardGallery.insertAdjacentHTML("afterbegin", markUp);
};
