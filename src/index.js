import { featchMovie } from "./js/apiCreated";
import { movieCreateCard } from "./js/movieCreateCard";
import { featchOnClickdMovie } from "./js/apiCreated";
import { modalCardMovie } from "./js/modalCardMovie";

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
            featchOnClickdMovie(idCardMovie.parentNode.getAttribute('data-modal')).then(modalCard => {             
                console.log(modalCard);

                modalCardMovie(modalCard)

                const refs = {
                    openModalBtn: document.querySelector("[data-modal-open]"),
                    closeModalBtn: document.querySelector("[data-modal-close]"),
                    modal: document.querySelector("[data-modal]"),
                  };
                
                  refs.openModalBtn.addEventListener("click", toggleModal);
                  refs.closeModalBtn.addEventListener("click", toggleModal);
                
                  function toggleModal() {
                    refs.modal.classList.toggle("is-hidden");
                  }
               
                
        });
    }

            
}    
        
        

    }).catch (error => console.log(error));
};


    


