const API_URL = 'https://api.themoviedb.org/3/trending/movie/day?';
const KEY = 'api_key=d03712107dcdd723f1173c5ee2c0d8c1';


export function featchMovie() {
    return fetch(`${API_URL}${KEY}`).then(responce => {

        if (!responce.ok) {
            throw new Error(responce.statusText);
        }

        return responce.json();
    });
}

export function featchOnSearchedMovie(query) {
    return fetch(`https://api.themoviedb.org/3/search/movie?${KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
    .then(responce => {
        if (!responce.ok) {
            throw new Error(responce.statusText);
        }

        return responce.json();
    });
}

