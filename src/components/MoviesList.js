import React from "react";
import {Link} from "react-router-dom"

function MoviesList({movies}) {
    //because of the structure of the object in App, Object.keys()
    //returns [1, 2, 3] => the movieID is an integer

    const renderMovies = Object.keys(movies).map((movieID) => (
        <li key={movieID}><Link
        to={`/movies/${movieID}`}
        >{movies[movieID].title}</Link>
        
        </li>
    ))

    return <ul>{renderMovies}</ul>
}

export default MoviesList