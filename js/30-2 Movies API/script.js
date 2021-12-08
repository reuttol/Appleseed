const KEY = '4e35ad30';

const movieSearch = document.querySelector('.movie');
const searchBtn = document.querySelector('button');
const resultContainer = document.querySelector('.result-container');

searchBtn.addEventListener('click', searchMovie, false);

async function searchMovie(event){
    resultContainer.innerHTML = '';
    const movieName = movieSearch.value.replace(/\ /g, '+');
    

    try{
        const res = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=${KEY}`);
        if(!res.ok)
            throw Error("?")
        const movie = await res.json();
        console.log(movie);
        displayMovie(movie); 
    }
    catch(e){

    }

}

function displayMovie(movie){
    console.log("ff");

        
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    // imgContainer.classList.add('img-container');
    img.src = movie.Poster;

    const title = document.createElement('h3');
    title.innerText = movie.Title;
    
    const descript = document.createElement('p');
    descript.innerText = `${movie.Year} | ${movie.Runtime}`;

    const genre = document.createElement('h4');
    genre.innerText = movie.Genre.replace(/, /g, ' | ');
    
    const plot = document.createElement('p');
    plot.innerText = movie.Plot;

    const director = document.createElement('p');
    director.innerText = `Director: ${movie.Director}`;

    const actors = document.createElement('p');
    actors.innerText = `Actors: ${movie.Actors.toString()}`;

    const ratings = document.createElement('div');
    ratings.classList.add("ratings")
    for(let rating of movie.Ratings){
        console.log("g");
        const rContainer = document.createElement('div');
        rContainer.classList.add('rating-container');
        const r1 = document.createElement('div');
        const r2 = document.createElement('div');
        r1.innerText = rating.Source;
        r2.innerText = rating.Value;
        rContainer.appendChild(r1);
        rContainer.appendChild(r2);

        ratings.appendChild(rContainer);
    }
 
    resultContainer.appendChild(title);
    resultContainer.appendChild(descript);
    resultContainer.appendChild(ratings);
    resultContainer.appendChild(imgContainer);
    imgContainer.appendChild(img);
    resultContainer.appendChild(genre);
    resultContainer.appendChild(plot);
    resultContainer.appendChild(director);
    resultContainer.appendChild(actors);
    
    // resultContainer.appendChild(cardContainer);
}