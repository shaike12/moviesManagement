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

function AddMemberComp(props) {

    const [ member, setMember ] = useState({
        id: '',
        name: '',
        email: '',
        address: {city: ''},
    })

 
    const addMember = () => {
        props.dispatch({
            type: 'ADD_MEMBER',
            payload: member
        })

    }


    const handleNameInput = (event) => {
        setMember({...member, name: event.target.value})
    }

    const handleEmailInput = (event) => {
        setMember({...member, email: event.target.value})
    }

    const handleCityInput = (event) => {
        setMember({...member, address: {city: event.target.value}})
    }


    return (
        <div>
            <Typography 
                style={{
                    padding: '10px',
                    color: 'grey'
                }}
                variant="h4" 
                component="h2"
            >
                    Subscriptions
            </Typography>
            <Typography>
                <Button variant="outlined" style={{marginRight: '10px'}} color='primary'>
                    <Link style={{width: '100%', textDecoration: 'none', color: 'black'}} to='/members'>All Members</Link>
                </Button>
                <Button variant="contained" color='primary'>
                    <Link style={{width: '100%', textDecoration: 'none', color: 'black'}} to='/members/addMember'>Add Member</Link>
                </Button>
            </Typography>
            <Card style={{ margin: '16px'}}>
                <CardActionArea>
                    <CardContent>
                        <form autoComplete="off">
                            Name: <TextField fullWidth variant="outlined" margin="normal" value={member.name} name='name' onChange={handleNameInput} /><br/>
                            Email: <TextField fullWidth variant="outlined" margin="normal" value={member.email} name='email' onChange={handleEmailInput} /><br/>
                            City: <TextField fullWidth variant="outlined" margin="normal" value={member.address.city} name='city' onChange={handleCityInput} /><br/>
                        </form>
                    </CardContent>
                    <ButtonGroup fullWidth variant="contained" color="primary">
                        <Button onClick={() => addMember(member)} size="large" color="primary">
                            <Link to='/members' style={{width: '100%',textDecoration: 'none', color: 'white'}}>Save</Link>
                        </Button>
                        <Button size="large" color="primary">
                            <Link to='/members' style={{width: '100%', textDecoration: 'none', color: 'white'}}>Cancel</Link>
                        </Button>
                    </ButtonGroup>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default connect() (AddMemberComp)