!function(){document.querySelector(".movie-gallery");document.querySelector("body")&&fetch("".concat("https://api.themoviedb.org/3/trending/movie/day?").concat("api_key=d03712107dcdd723f1173c5ee2c0d8c1")).then((function(e){if(console.log(e),!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){console.log(e.results)}))}();
//# sourceMappingURL=index.02d291b8.js.map
