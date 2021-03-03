import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function WatchedMoviesComp(props) {
    console.log(props.watchedMovies);

    return (
        <div style={{ marginTop: "20px" }}>
            <ul>
                {props.watchedMovies.map(movie => {
                    
                    return (
                        <li key={movie.movie_id}>
                            <Link to={`/movies/movie/${movie.movie_id}`}>{movie.movie_name}</Link>, {movie.watched_date}
                        </li>
                    )
                })}
                
            </ul>
        </div>
    )
}


export default WatchedMoviesComp;