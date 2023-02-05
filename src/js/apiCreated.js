const API_URL = 'https://api.themoviedb.org/3/trending/movie/day?';
const KEY = 'api_key=d03712107dcdd723f1173c5ee2c0d8c1';


export function featchMovie() {
    return fetch(`${API_URL}${KEY}`).then(responce => {
        console.log(responce);

        if (!responce.ok) {
            throw new Error(responce.statusText);
        }

        return responce.json();
    });
}

