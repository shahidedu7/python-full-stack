class Movie{
    constructor(){
        this.api_key = '5fd4b8b2232d79c6.........'; // put your api key here
    }

    async getMovies(query){
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${query}`;
        

        let data = [];
        const getAllMovies = async (page = 1) => {
            let results = await fetch(`${apiUrl}&page=${page}`);
            results = await results.json();
            results.results.forEach(movie =>{
                data.push(movie)
            });

            if (page<results.total_pages) {
                return await getAllMovies(page + 1);
            }else {
                return data;
            }
        }
        const movies = getAllMovies()
        return movies;
    }
}
