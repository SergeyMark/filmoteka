document.querySelector(".movie-gallery");document.querySelector("body")&&fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=d03712107dcdd723f1173c5ee2c0d8c1").then((e=>{if(console.log(e),!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{console.log(e.results)}));
//# sourceMappingURL=index.752f415e.js.map
