import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from  'react-redux'

// Material UI
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardActionArea from '@material-ui/core/CardActionArea';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function EditMovieComp(props) {

    const [ movie, setMovie ] = useState({
        name: '',
        genres: [],
        image: '',
        premiered: ''
    })

    useEffect(() => {
        // Initilize Movie Inputs
        let data = props.data.movies.filter(movie => movie.id == props.match.params.id)
        setMovie(data[0])
    }, [])

    // Save Updated Movie
    const updateMovie = () => {

        props.dispatch({
            type: 'EDIT_MOVIE',
            payload: movie
        })
    }


    // Handle All Inputs Changes
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
        <Card style={{ margin: '16px' }}>
            <CardActionArea>
                <CardContent>
                    <form autoComplete="off">
                        Name:<TextField variant="outlined" margin="normal" value={movie.name} fullWidth name='name' onChange={handleNameInput} />
                        Genres:<TextField variant="outlined" margin="normal" value={movie.genres} fullWidth name='genres' onChange={handleGenresInput} />
                        Image Url:<TextField variant="outlined" margin="normal" value={movie.image ? movie.image.medium : 'No Image'} fullWidth name='image' onChange={handleImageInput} />
                        Premiered:<TextField variant="outlined" margin="normal" value={movie.premiered} fullWidth name='premiered' onChange={handlePremieredInput} />
                    </form>

                </CardContent>
                <ButtonGroup fullWidth variant="contained" color="primary">

                    <Button onClick={updateMovie} size="large" color="primary">
                        <Link to='/movies' style={{width: '100%', textDecoration: 'none', color: 'white'}}>Save</Link>
                    </Button>
                    <Button size="large" color="primary">
                        <Link to='/movies' style={{width: '100%', textDecoration: 'none', color: 'white'}}>Cancel</Link>
                    </Button>
                </ButtonGroup>
            </CardActionArea>
        </Card>
    )
}

const mapStateToProps = (state) =>
{
  return {
    data : state
  }
}


export default connect(mapStateToProps) (EditMovieComp)