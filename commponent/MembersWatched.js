import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function MembersWatchedComp(props) {

    return (
        <div>
            Subscriptions Watched
            {props.movies.map(movie => {
                return (
                    <li key={movie.member_id}>
                        <Link to={`/users/user/${movie.member_id}`}>{movie.member_name}</Link>, {movie.watched_date}
                    </li>
                )
            })}
        </div>
    )
}


export default MembersWatchedComp;