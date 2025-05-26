const movies = new Movie();
const searchButton = document.querySelector('#searchMovie');
const searchField = document.querySelector('#movieField');
const movieList = document.querySelector('#movie-list');
const movieResults = document.querySelector('#results');

searchButton.addEventListener('click', e => {
    const query = searchField.value;

    if (query !== '') {

        movieList.innerHTML = '';
        movies.getMovies(query)
        .then(data =>{
            if (data.length == 0){
                return movieResults.innerHTML = `<p>Movie not found.</p>`
            }
            displayMovies(data);
        })
    }
})

function displayMovies(data){
    // data.forEach(movie =>{
    //     console.log(movie.release_date);
    // })
    // console.log(data);
    movieResults.innerHTML = `<p>${data.length} Movies found.</p>`
    data.forEach(movie => {
        const markup = `<div class="card mt-4">
            <div class="row no-gutters">
                <div class="col-3">
                    <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}" class="img-fluid card-img">
                </div>
                <div class="col-9">
                    <div class="car-body">
                        <h2 class="card-title">${movie.original_title}</h2>
                        <p>Date published: ${movie.release_date}</p>
                        <p>Description of Movie: ${movie.overview} </p>
                        <hr>
                        <p>Total Votes: <b>${movie.vote_count}</b></p>
                        <p>Rating: ${movie.vote_average}</p>
                    </div>
                </div>
            </div>
        </div>`

        movieList.insertAdjacentHTML('afterbegin', markup);
    });
}