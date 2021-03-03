
const mainReducer = (state = { movies: [], members: [], movies_watched: []}, action) =>
{
    switch(action.type)
    {
        case 'INITILIZE':
            return {...state, ...action.payload}

        case 'DELETE_MOVIE':
            let allMovies = state.movies.filter(movie => movie.id != action.payload)
            return {...state, movies : allMovies}
        
        case 'EDIT_MOVIE':
            let allMovies2 = state.movies.map(movie => {
                if (movie.id == action.payload.id) {
                    return action.payload
                }
                return movie
            })
            return {...state, movies : allMovies2}
        
        case 'ADD_MOVIE':
            let allMovies3 = state.movies
            let newMovie = action.payload
            newMovie.id = allMovies3[allMovies3.length - 1].id + 1
            allMovies3.push(newMovie)
            return {...state, movies : allMovies3}
        
        case 'DELETE_MEMBER':
            let allMembers = state.members.filter(member => member.id != action.payload)
            return {...state, members : allMembers}

        case 'EDIT_MEMBER':
            let allMembers2 = state.members.map(member => {
                if (member.id == action.payload.id) {
                    return action.payload
                }
                return member
            })
            return {...state, members : allMembers2}
        
        case 'ADD_MEMBER':
            let allMembers3 = state.members
            let newMember = action.payload
            newMember.id = allMembers3[allMembers3.length - 1].id + 1
            allMembers3.push(newMember)
            return {...state, members : allMembers3}
    
        case 'ADD_WATCHED_MOVIE':
            let moviesWatched = state.movies_watched
            moviesWatched.push(action.payload)
            return {...state, movies_watched : moviesWatched}
                
        default:
            return state;
    }
}

export default mainReducer;