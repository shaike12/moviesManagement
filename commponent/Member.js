import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' 
import AddWatchedMovieComp from './AddWatchedMovie';
import WatchedMoviesComp from './WatchedMovies'

// Material UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


function MemberComp(props) {

    const [ showAddWatchedMovie, setShowAddWatchedMovie ] = useState(false)
    const [ watchedMovies, setWatchedMovies ] = useState([])

    useEffect( () => {

        let memberMovies = props.data.movies_watched.filter(movie => movie.member_id == props.member.id)
        memberMovies.map(element => {
            // Find The Name Of The Movie By Movie Id
            let index = props.data.movies.findIndex(movie => movie.id === element.movie_id)
            // If Found A Movie (if not deleted yet) Attached/Update Movie Name
            if (index >= 0) {
                element.movie_name = props.data.movies[index].name
            }
            return element
        })
        setWatchedMovies(memberMovies)
        
    }, [showAddWatchedMovie])

    // Delete Member
    const deleteMember = () => {
        props.dispatch({
            type: 'DELETE_MEMBER',
            payload: props.member.id
        })
    }


    return (
        <Grid item xs={6}>

            <Card style={{ margin: '16px', maxWidth: '370px', minWidth: '300px'}}>
                <CardActionArea>
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Name: {props.member.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Email: {props.member.email}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            City: {props.member.address.city}
                        </Typography>
                        <div>
                            <Typography gutterBottom variant="h6" component="h2">Movies Watched</Typography>
                            <Button variant="contained" onClick={() => setShowAddWatchedMovie(!showAddWatchedMovie)} color="secondary">Subscribe To New Movie</Button>
                            {showAddWatchedMovie && <AddWatchedMovieComp 
                                                        member={props.member} 
                                                        show={setShowAddWatchedMovie}
                                                    />}

                            <WatchedMoviesComp 
                                watchedMovies={watchedMovies}/>
                            
                        </div>
                    </CardContent>
                    <ButtonGroup fullWidth variant="contained" color="primary">

                        <Button size="large" color="primary">
                            <Link to={`/members/editMember/${props.member.id}`} style={{width: '100%', textDecoration: 'none', color: 'white'}}>Edit</Link>
                        </Button>
                        <Button onClick={deleteMember} size="large" color="primary">
                            Delete
                        </Button>
                    </ButtonGroup>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

const mapStateToProps = (state) =>
{
  return {
    data : state
  }
}

export default connect(mapStateToProps) (MemberComp);