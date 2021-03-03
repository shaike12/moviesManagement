import React, { useState } from 'react'
import MovieComp from './Movie'
import SearchMovieComp from './SearchMovie'
// Material UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

function MoviesComp(props) {

    const [ searchValue, setSearchValue ] = useState('')

    return (
        <div className="page_header_container">
            
            <Typography 
                style={{
                    padding: '10px',
                    color: 'grey'
                }}
                variant="h4" 
                component="h2"
            >
                Movies
            </Typography>
            <Grid container justify="center">
                <Grid item xs={8} style={{paddingLeft: "16px"}}>

                    <Button variant="contained" color='primary' style={{marginRight: '10px'}}>
                        <Link style={{textDecoration: 'none', color: 'black'}} to='/movies'>All Movies</Link>
                    </Button>

                    <Button variant="outlined" color='primary'>
                        <Link style={{textDecoration: 'none', color: 'black'}} to='/movies/addMovie'>Add Movie</Link>
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <SearchMovieComp setSearchValue={setSearchValue}/>
                </Grid>
            </Grid>
            
            {/* Movies Container */}
            <Grid container justify="center">
                    
                    {props.data.movies.filter(movie => 
                        movie.name.toLowerCase().includes(searchValue.toLowerCase()))
                            .map(movie => {
                                let watchedMovies = props.data.movies_watched.filter(watch => watch.movie_id == movie.id)

                                return (
                                    <MovieComp 
                                        key={movie.id} 
                                        movie={movie}
                                        watched_movies={watchedMovies}
                                    />
                                )
                    })}
                    
            </Grid>
            
        </div>
    )
}

// State From Redux
const mapStateToProps = (state) =>
{
  return {
    data : state
  }
}

export default connect(mapStateToProps)(MoviesComp);