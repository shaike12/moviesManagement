import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

// Material UI
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, InputLabel } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function AddWatchedMovieComp(props) {

    const [ movieId, setMovieId ] = useState(0)
    const [ date, setDate ] = useState('')
    const [ movies, setMovies ] = useState([])
    const [ error, setError ] = useState(false)

    useEffect(() => {
        setMovies(removeFromSelectInputSeenMovies())
        
    }, [])

    // Handle Inputs
    const handleSelectChange = (event) => {
       
        setMovieId(event.target.value)
    }

    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    // Add Watched Movie
    const addWatchMovie = (event) => {
        event.preventDefault()

        // If User Didn't Select Movie, Date From List - Don't Add To List
        if (movieId === '' || date === ''){
            setError(true)
            return false
        }

        // Watched Movie Tamplate
        let movie = {
            movie_id: movieId,
            member_name: props.member.name,
            movie_name: '',
            member_id: props.member.id,
            watched_date: date
        }
        props.dispatch({
            type: 'ADD_WATCHED_MOVIE',
            payload: movie
        })

        // Hide Errors 
        setError(false)

        // Close The Window
        props.show(false)
    }

    // Filtered Movies In Select Input That The User Allready Saw
    const removeFromSelectInputSeenMovies = () => {
       
        let filterdMovies = props.data.movies.filter(movie => {
            // Filtered Movies In Select Input That The User Allready Saw
            for(let j = 0; j < props.data.movies_watched.length; j++) { 
                // If Movie Exsists Add Them To The Movies List
                if(movie.id === props.data.movies_watched[j].movie_id) 
                { 
                    return false;
                } 
            } 
            // If Movie Exsists Add Them To The Movies List 
            return true;  
        })
        return filterdMovies
    }



    return (
        <div style={{margin: '20px'}}>
            <Typography gutterBottom variant="h6" component="h2">Add a New Movie</Typography>
            <FormControl 
                style={{marginBottom: '10px'}} 
                fullWidth
            >
                <InputLabel>Select a Movie</InputLabel>
                <Select 
                    onChange={handleSelectChange} 
                    value={movieId}
                    autoWidth
                >
                {movies.map(movie => {
                    return (
                        <MenuItem value={movie.id}>{movie.name}</MenuItem>
                    )
                })}
                </Select><br/>
                
                <TextField
                    type="Date" 
                    InputLabelProps={{shrink: true}} 
                    label="Watching Date" 
                    fullWidth 
                    value={date} 
                    onChange={handleDateChange}
                /><br/>
                
                {error ? <div style={{ marginBottom: '10px', color: 'red'}}>You Need To Fill All Inputs</div> : <></>}
                
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={addWatchMovie}
                >
                    Subscribe
                </Button>

            </FormControl>
        </div>
    )
}

const mapStateToProps = (state) =>
{
  return {
    data : state
  }
}


export default connect(mapStateToProps) (AddWatchedMovieComp)
