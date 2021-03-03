import React, { useState} from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

function AddMoviePage(props) {

    const [ movie, setMovie ] = useState({
        name: '',
        genres: [],
        image: {medium: ''},
        premiered: ''
    })

 
    const save = (movie) => {
        props.dispatch({
            type: 'ADD_MOVIE',
            payload: movie
        })

    }


    const handleNameInput = (event) => {
        setMovie({...movie, name: event.target.value})
    }

    const handleGenresInput = (event) => {
        setMovie({...movie, genres: event.target.value.split(',')})
    }

    const handleImageInput = (event) => {
        setMovie({...movie, image: {medium: event.target.value}})
    }

    const handlePremieredInput = (event) => {
        setMovie({...movie, premiered: event.target.value})
    }


    return (
        <Card>
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
            <Typography>
                <Button variant="outlined" style={{marginRight: '10px'}} color='primary'>
                    <Link style={{width: '100%', textDecoration: 'none', color: 'black'}} to='/movies'>All Movies</Link>
                </Button>
                <Button variant="contained" color='primary'>
                    <Link style={{width: '100%', textDecoration: 'none', color: 'black'}} to='/movies/addMovie'>Add Movie</Link>
                </Button>
            </Typography>
            <Card style={{ margin: '16px'}}>
                <CardActionArea>
                    <CardContent>
                        <form autoComplete='off'>
                            Name: <TextField fullWidth variant="outlined" margin="normal" value={movie.name} name='name' onChange={handleNameInput} /><br/>
                            Genres: <TextField fullWidth variant="outlined" margin="normal" value={movie.genres} name='genres' onChange={handleGenresInput} /><br/>
                            Image Url: <TextField fullWidth variant="outlined" margin="normal" value={movie.image.medium} name='image' onChange={handleImageInput} /><br/>
                            Premiered: <TextField fullWidth variant="outlined" margin="normal" value={movie.premiered} name='premiered' onChange={handlePremieredInput} />
                        </form>
                    </CardContent>
                    <ButtonGroup fullWidth variant="contained" color="primary">
                        <Button onClick={() => save(movie)} size="large" color="primary">
                            <Link to='/movies' style={{width: '100%', textDecoration: 'none', color: 'white'}}>Save</Link>
                        </Button>
                        <Button size="large" color="primary">
                            <Link to='/movies' style={{width: '100%', textDecoration: 'none', color: 'white'}}>Cancel</Link>
                        </Button>
                    </ButtonGroup>
                </CardActionArea>
            </Card>
        </Card>
    )
}

export default connect() (AddMoviePage)