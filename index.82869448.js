function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r.register("fyOuC",(function(t,n){e(t.exports,"featchMovie",(function(){return r})),e(t.exports,"featchOnSearchedMovie",(function(){return a})),e(t.exports,"featchOnClickdMovie",(function(){return i}));const o="api_key=d03712107dcdd723f1173c5ee2c0d8c1";function r(){return fetch(`https://api.themoviedb.org/3/trending/movie/day?${o}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}function a(e){return fetch(`https://api.themoviedb.org/3/search/movie?${o}&language=en-US&query=${e}&page=1&include_adult=false`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}function i(e){return fetch(`https://api.themoviedb.org/3/movie/${e}?${o}&language=en-US`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}})),r.register("gqRwI",(function(t,n){e(t.exports,"movieCreateCard",(function(){return r}));const o=document.querySelector(".movie-gallery");function r(e){const t=e.map((e=>`<div class="card" data-modal="${e.id}" data-modal-open>\n            <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.original_title}" class="card__img">\n            <div class="wrap-text">\n                <h2 class="card__title">${e.title}</h2>\n                <p class="card__subtext">${e.release_date}</p>\n            </div>\n        </div>`)).join("");o.insertAdjacentHTML("afterbegin",t)}}));var a=r("fyOuC"),i=r("gqRwI");a=r("fyOuC");const d=document.querySelector(".movie-gallery");function c(e){const t=`\n            <div class="backdrop is-hidden" data-modal>\n                <div class="modal">\n                    <button class="modal-btn" type="button" data-modal-close>\n                        <svg class="modal-btn__icon" width="16" height="16">\n                            <use></use>\n                        </svg>\n                    </button>\n                    <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.original_title}">\n                    <h2 class="modal-title">${e.original_title}</h2>\n                    <p class="modal-text">${e.overview}</p>\n                </div>\n            </div>`;d.insertAdjacentHTML("afterbegin",t)}document.querySelector("body").onload=function(){(0,a.featchMovie)().then((e=>{console.log(e),(0,i.movieCreateCard)(e.results);document.querySelector(".movie-gallery").addEventListener("click",(function(e){const t=e.target;"IMG"===t.tagName&&(0,a.featchOnClickdMovie)(t.parentNode.getAttribute("data-modal")).then((e=>{console.log(e),c(e);const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function n(){t.modal.classList.toggle("is-hidden")}t.openModalBtn.addEventListener("click",n),t.closeModalBtn.addEventListener("click",n)}))}))})).catch((e=>console.log(e)))};
//# sourceMappingURL=index.82869448.js.map