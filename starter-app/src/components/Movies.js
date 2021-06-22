
import React from 'react';
import './Movies.css';
import { Card } from 'react-bootstrap';

function Movies(props) {
     return(
         <div>
             {props.movies.map(movie => {
                 return(
                 <Card style={{ width: '18rem' }}>
                     <Card.Img class = "poster" variant="top" src={movie.Poster} />
                     <Card.Body>
                         <Card.Title class = "title">{movie.Title}</Card.Title>
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