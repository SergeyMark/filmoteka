function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("fyOuC",(function(t,n){e(t.exports,"featchMovie",(function(){return o})),e(t.exports,"featchOnSearchedMovie",(function(){return i}));const r="api_key=d03712107dcdd723f1173c5ee2c0d8c1";function o(){return fetch(`https://api.themoviedb.org/3/trending/movie/day?${r}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}function i(e){return fetch(`https://api.themoviedb.org/3/search/movie?${r}&language=en-US&query=${e}&page=1&include_adult=false`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}})),o.register("gqRwI",(function(t,n){e(t.exports,"movieCreateCard",(function(){return o}));const r=document.querySelector(".movie-gallery");function o(e){const t=e.map((e=>`<div class="card">\n            <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.original_title}" class="card__img">\n            <div class="wrap-text">\n                <h2 class="card__title">${e.title}</h2>\n                <p class="card__subtext">${e.release_date}</p>\n            </div>\n        </div>`)).join("");r.insertAdjacentHTML("afterbegin",t)}}));var i=o("fyOuC"),a=o("gqRwI");document.querySelector("body").onload=function(){(0,i.featchMovie)().then((e=>{console.log(e),(0,a.movieCreateCard)(e.results)})).catch((e=>console.log(e)))};
//# sourceMappingURL=index.b2b4248d.js.map