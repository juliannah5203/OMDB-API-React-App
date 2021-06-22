
import React, { useState } from 'react';
import './MovieInfo.css';
import Movies from './Movies';

function MovieInfo() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");
    const [showMovies, setShowMovies] = useState(false);
    const [nextShowUp, setNextShowUp] = useState(false);
    const [current, setCurrent] = useState(1);
    const [nextPage, setNextPage] = useState(current + 1);

    function handleSubmit(e) {
        setCurrent(1);
        e.preventDefault();

        async function fetchMyAPI() {

           const searchParam = encodeURIComponent(query);
           setSearch(searchParam);

           const apiUrl = `https://www.omdbapi.com/?apikey=e147964d&s=${searchParam}&type=movie&r=json&page=${current}`;
           const apiUrl2 = `https://www.omdbapi.com/?apikey=e147964d&s=${searchParam}&type=movie&r=json&page=${nextPage}`;

           let response = await fetch(apiUrl);
           let response2 = await fetch(apiUrl2);

           if (response2.ok) {
                setNextShowUp(true);
            }

                response = await response.json();
                console.log(apiUrl);
                console.log(response.Search);
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
        setMovies([]);
    }

    function handleNext() {
        async function fetchMyAPI() {
            const apiUrl = `https://www.omdbapi.com/?apikey=e147964d&s=${search}&r=json&type=movie&page=${nextPage}`;
            let response = await fetch(apiUrl);
            if (response.ok) {
                response = await response.json();
                console.log(apiUrl);
                console.log(response.Search);
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
                setCurrent(nextPage);
                setNextPage(nextPage + 1);
                }
        }
        fetchMyAPI();
        setShowMovies(true);
    }

   

    return(
        <div className="movieinfo">
            <form onSubmit={handleSubmit}>
            <div className="topnav">
                Enter a movie name: 
                <input
                    id="queryInput"
                    value={query}
                    type="text"
                    autoFocus
                    onChange={e => setQuery(e.target.value) }/>
                <button className="search">Search</button>
                </div>
            </form> 
            <p>
            { nextShowUp ? <button className = "next" onClick = { () => handleNext()}>Next</button> : <></>}
            </p>
            { showMovies  ? <Movies movies = {movies}></Movies> : <></>}
            <p></p>
             </div>
    )
}

export default MovieInfo;