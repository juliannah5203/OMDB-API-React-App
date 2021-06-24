
import React from 'react';
import './Movies.css';
import { Card } from 'react-bootstrap';


function Movies(props) {
    
    
     return(
         <div>
             {props.movies.map(movie => {
                //  var link = movie.imdbID;
                 

                 return(
                 <Card style={{ width: '18rem' }}>
                     <Card.Img class = "poster" variant="top" src={movie.Poster} />
                     <Card.Body>
                         <Card.Title class = "title">{movie.Title}</Card.Title>
                         <Card.Link href={"https://www.imdb.com/title/"+movie.imdbID} target="_blank" className="linkexternal">Check it out on IMDb!</Card.Link>

                         <Card.Text>
                             Released Date: {movie.Released} <br/>
                             Runtime: {movie.Runtime} <br/>
                             Genre: {movie.Genre} <br/>
                             Director: {movie.Director}
                            
                            
                         </Card.Text>


                     </Card.Body>
                 </Card>)
             })}
         </div>
     )
}

export default Movies;