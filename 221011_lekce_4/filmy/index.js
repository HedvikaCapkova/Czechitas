import { Movie } from "./Movie/index.js";

const renderMovies = () => {fetch ('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
.then((response) => response.json())
.then(data => {
    const movieList = document.querySelector('.movie-list');
    movieList.innerHTML = data.map((item) => {
        return Movie(item);
    }).join('');
});
};

renderMovies();

