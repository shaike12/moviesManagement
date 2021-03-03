import React from 'react'
// Material-UI
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';





export default function FindMovieComp(props) {


    return (
        <div style={{ display: "flex", width: "400px"}}>
            <SearchIcon />
            <TextField fullWidth placeholder="Search .... " onChange={(e) => props.setSearchValue(e.target.value)}/>
        </div>
        
    )
}
