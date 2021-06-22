import React, { useState } from 'react';
import './MovieInfo.css';
import Movies from './Movies';

function MovieInfo() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [showMovies, setShowMovies] = useState(false);
    
    function handleSubmit(e) {
        e.preventDefault();
        async function fetchMyAPI() {
            const searchParam = encodeURIComponent(query);
            // const apiUrl = `https://www.omdbapi.com/?apikey=e147964d&t=${searchParam}&r=json`;
            const apiUrl = `https://www.omdbapi.com/?apikey=e147964d&s=${searchParam}&type=movie&r=json&page=1`;
            console.log(apiUrl);
            let response = await fetch(apiUrl);
            response = await response.json();
            console.log(response);
            for(let i in response.Search) {
                console.log(response.Search[i].Title);


                const apiUrl2 = `https://www.omdbapi.com/?apikey=e147964d&t=${response.Search[i].Title}&r=json`;
                console.log(apiUrl2);
                let response2 = await fetch(apiUrl2);
                response2 = await response2.json();
                console.log(response2);
                response.Search[i] = response2;
            }

            console.log(response.Search);
            setMovies(response.Search);
        }
        fetchMyAPI();
        setShowMovies(true);
        setQuery("");
    }

    return(
        <div className="movieinfo">
            <form onSubmit={handleSubmit}>
                <div className="topnav">
                    <label htmlFor="queryInput">Enter Movie Name:</label>
                    <input 
                        id="queryInput" 
                        value={query} 
                        autoFocus
                        type="text"
                        onChange={e => setQuery(e.target.value)}/>
                    <button className="search">Search</button>
                </div>
            </form>
            {showMovies ? <Movies movies={movies}></Movies> : <></>}
        </div>
    )
}

export default MovieInfo;