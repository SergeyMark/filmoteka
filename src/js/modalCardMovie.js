const cardGallery = document.querySelector('.movie-gallery');

export function modalCardMovie(object) {
    const modalMarkUp = `
            <div class="backdrop is-hidden" data-modal>
                <div class="modal">
                    <button class="modal-btn" type="button" data-modal-close>
                        <svg class="modal-btn__icon" width="16" height="16">
                            <use></use>
                        </svg>
                    </button>
                    <img src="https://image.tmdb.org/t/p/w500${object.poster_path}" alt="${object.original_title}">
                    <h2 class="modal-title">${object.original_title}</h2>
                    <p class="modal-text">${object.overview}</p>
                </div>
            </div>`
        
        cardGallery.insertAdjacentHTML("afterbegin", modalMarkUp);
}