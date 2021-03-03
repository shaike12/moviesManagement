import React, { useEffect } from 'react'
import MoviesComp from './commponent/Movies'
import AddMovieComp from './commponent/AddMovie'
import MembersComp from './commponent/Members'
import AddMemberComp from './commponent/AddMember'
import HeaderMenu from './commponent/HeaderMenu'
import MoviePageComp from './commponent/MoviePage'
import EditMovieComp from './commponent/EditMovie'
import EditMemberComp from './commponent/EditMember'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

function App(props) {

  useEffect( async () => {
    let movies = await axios.get('https://api.tvmaze.com/shows?page=0')
    let members = await axios.get('https://jsonplaceholder.typicode.com/users')
    props.dispatch({
      type: 'INITILIZE',
      payload: {movies: movies.data, members: members.data}
    })
  }, [])


  return (
    <div className="app-container">
        <HeaderMenu/>
        
        <Switch>
          <Route exact path='/movies' component={MoviesComp}/>
          <Route path='/movies/addMovie' component={AddMovieComp}/>
          <Route path='/movies/editMovie/:id' component={EditMovieComp}/>
          <Route path='/movies/movie' component={MoviePageComp}/>
          <Route exact path='/members' component={MembersComp}/>
          <Route exact path='/members/addMember' component={AddMemberComp}/>
          <Route path='/members/editMember/:id' component={EditMemberComp}/>

        </Switch>
    </div>
  );
}

export default connect() (App);
