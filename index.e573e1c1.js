!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a.register("Ag04w",(function(t,n){e(t.exports,"featchMovie",(function(){return a})),e(t.exports,"featchOnSearchedMovie",(function(){return r})),e(t.exports,"featchOnClickdMovie",(function(){return c}));var o="api_key=d03712107dcdd723f1173c5ee2c0d8c1";function a(){return fetch("".concat("https://api.themoviedb.org/3/trending/movie/day?").concat(o)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}function r(e){return fetch("https://api.themoviedb.org/3/search/movie?".concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}function c(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?").concat(o,"&language=en-US")).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}})),a.register("7D62B",(function(t,n){e(t.exports,"movieCreateCard",(function(){return a}));var o=document.querySelector(".movie-gallery");function a(e){var t=e.map((function(e){return'<div class="card" data-modal="'.concat(e.id,'" data-modal-open>\n            <img src="https://image.tmdb.org/t/p/w500').concat(e.poster_path,'" alt="').concat(e.original_title,'" class="card__img">\n            <div class="wrap-text">\n                <h2 class="card__title">').concat(e.title,'</h2>\n                <p class="card__subtext">').concat(e.release_date,"</p>\n            </div>\n        </div>")})).join("");o.insertAdjacentHTML("afterbegin",t)}}));var r=a("Ag04w"),c=a("7D62B"),i=(r=a("Ag04w"),document.querySelector(".movie-gallery"));document.querySelector("body").onload=function(){(0,r.featchMovie)().then((function(e){console.log(e),(0,c.movieCreateCard)(e.results),document.querySelector(".movie-gallery").addEventListener("click",(function(e){var t=e.target;"IMG"===t.tagName&&(0,r.featchOnClickdMovie)(t.parentNode.getAttribute("data-modal")).then((function(e){var t,n;console.log(e),n='\n            <div class="backdrop is-hidden" data-modal>\n                <div class="modal">\n                    <button class="modal-btn" type="button" data-modal-close>\n                        <svg class="modal-btn__icon" width="16" height="16">\n                            <use></use>\n                        </svg>\n                    </button>\n                    <img src="https://image.tmdb.org/t/p/w500'.concat((t=e).poster_path,'" alt="').concat(t.original_title,'">\n                    <h2 class="modal-title">').concat(t.original_title,'</h2>\n                    <p class="modal-text">').concat(t.overview,"</p>\n                </div>\n            </div>"),i.insertAdjacentHTML("afterbegin",n);var o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function a(){o.modal.classList.toggle("is-hidden")}o.openModalBtn.addEventListener("click",a),o.closeModalBtn.addEventListener("click",a)}))}))})).catch((function(e){return console.log(e)}))}}();
//# sourceMappingURL=index.e573e1c1.js.map
