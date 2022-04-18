import React from "react";
import { useParams } from "react-router-dom"

function MovieShow({movies}) {
    const params = useParams()
    console.log(params)

    return (
        //because params is an object, in order to access the integer
        //must write [params.movieId]
    <div>
      <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}

export default MovieShow;