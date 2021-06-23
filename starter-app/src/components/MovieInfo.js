import logo from './lens.png';
import React, { useState } from 'react';
import './MovieInfo.css';
import Movies from './Movies';

function MovieInfo() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");
    const [showMovies, setShowMovies] = useState(false);
    const [nextShowUp, setNextShowUp] = useState(false);
    const [prevShowUp, setPrevShowUp] = useState(false);
    const [current, setCurrent] = useState(1);
    const [nextPage, setNextPage] = useState(current + 1);
    const [prevPage, setPrevPage] = useState(1);

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
                    const apiUrl2 = `https://www.omdbapi.com/?apikey=e147964d&t=${response.Search[i].Title}&r=json`;
                    let response2 = await fetch(apiUrl2);
                    response2 = await response2.json();
                    response.Search[i] = response2;
                }
    
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
            const apiUrl0 = `https://www.omdbapi.com/?apikey=e147964d&s=${search}&r=json&type=movie&page=${prevPage}`;

            let response = await fetch(apiUrl);
            let response0 = await fetch(apiUrl0);
            

            if (response0.ok) {
                setPrevShowUp(true);
            }

            if (response.ok) {
                response = await response.json();
                console.log(apiUrl);
                console.log(response.Search);
                for(let i in response.Search) {
                    const apiUrl2 = `https://www.omdbapi.com/?apikey=e147964d&t=${response.Search[i].Title}&r=json`;
                    let response2 = await fetch(apiUrl2);
                    response2 = await response2.json();
                    response.Search[i] = response2;
                }
    
                setMovies(response.Search);
                setPrevPage(current);
                setCurrent(nextPage);
                setNextPage(nextPage + 1);
                }
        }
        fetchMyAPI();
        setShowMovies(true);
    }

    function handlePrev() {
        
        async function fetchMyAPI() {
            const apiUrl1 = `https://www.omdbapi.com/?apikey=e147964d&s=${search}&r=json&type=movie&page=${prevPage}`;
            
            let response = await fetch(apiUrl1);
            
               response = await response.json();
               console.log(apiUrl1);
               console.log(response.Search);
               for(let i in response.Search) {
                const apiUrl2 = `https://www.omdbapi.com/?apikey=e147964d&t=${response.Search[i].Title}&r=json`;
                let response2 = await fetch(apiUrl2);
                response2 = await response2.json();
                response.Search[i] = response2;
            }

            setMovies(response.Search);
               setNextPage(prevPage + 1);
               setCurrent(prevPage);
               if (prevPage - 1 > 0) setPrevPage(prevPage - 1);
               if (prevPage === 1) setPrevShowUp(false);
            
            
    }
            fetchMyAPI();
            setShowMovies(true);
    }



   

    return(
        <div className="movieinfo">
            
            <form onSubmit={handleSubmit}>
            <div className="topnav">
               
                <a href = "/ ">
                <img src={logo} className="App-logo" alt="logo" />
                </a>
                
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
            { prevShowUp ? <button className = "prev" onClick = { () => handlePrev()}>&laquo; Prev</button> : <></> }
            { nextShowUp ? <button className = "next" onClick = { () => handleNext()}>Next &raquo;</button> : <></>}
            </p>
            

            { showMovies  ? <Movies movies = {movies}></Movies> : <></>}
            <p></p>
            
             </div>
    )
}

export default MovieInfo;