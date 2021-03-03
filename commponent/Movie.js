import React, { useState } from 'react'
import EditMovieComp from './EditMovie'
import { Link } from 'react-router-dom'

// Material UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux' 
import MembersWatchedComp from './MembersWatched';


function MovieComp(props) {

   const [ showEditPage, setShowEditPage ] = useState(false)

   

    const deleteMovie = () => {
        props.dispatch({
            type: 'DELETE_MOVIE',
            payload: props.movie.id
        })
    }

    
    

    return (
            <Grid item xs={4}>
                <Card style={{ margin: '16px', width: '300px'}}>
                    <CardActionArea>
                        <CardMedia
                            style={{
                                height: '450px',
                                width: '300px',
                            }}
                            image={props.movie.image ? props.movie.image.medium : 'no image'}
                            title={props.movie.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.movie.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.movie.genres.join(' | ')}
                            </Typography>

                            <MembersWatchedComp movies={props.watched_movies}/>

                        </CardContent>
                        <ButtonGroup fullWidth variant="contained" color="primary">
                            <Button  onClick={() => setShowEditPage(true)} size="large" color="primary">
                                <Link to={`/movies/editMovie/${props.movie.id}`} style={{width: '100%', textDecoration: 'none', color: 'white'}}>Edit</Link>

                            </Button>
                            <Button onClick={deleteMovie} size="large" color="primary">
                                Delete
                            </Button>
                        </ButtonGroup>
                    </CardActionArea>
                </Card>
            </Grid>
    )
}

export default connect() (MovieComp);