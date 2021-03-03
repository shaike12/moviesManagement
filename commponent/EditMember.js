import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// Material UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function EditMemberComp(props) {

    const [ member, setMember ] = useState({
        name: '',
        email: '',
        address: {
            city: ''
        }
    })

    useEffect(() => {
        let member = props.data.members.filter(member => member.id == props.match.params.id)
        setMember(member[0])
    }, [])

    // Edit Member
    const editMember = (updatedMember) => {
        props.dispatch({
            type: 'EDIT_MEMBER',
            payload: member
        })
    }

    // Handle Inputs Changes
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
        <Card style={{ margin: '16px'}}>
            <CardActionArea>
                <CardContent>
                    <form autoComplete="off">
                        Name: <TextField fullWidth variant="outlined" margin="normal" value={member.name} name='name' onChange={handleNameInput} />
                        Email: <TextField fullWidth variant="outlined" margin="normal" value={member.email} name='email' onChange={handleEmailInput} />
                        City: <TextField fullWidth variant="outlined" margin="normal" value={member.address ? member.address.city : ''} name='city' onChange={handleCityInput} />
                    </form>

                </CardContent>
                <ButtonGroup fullWidth variant="contained" color="primary">
                    <Button onClick={editMember} size="large" color="primary">
                        <Link to='/members' style={{width: '100%', textDecoration: 'none', color: 'white'}}>Save</Link>
                    </Button>
                    <Button size="large" color="primary">
                        <Link to='/members' style={{width: '100%', textDecoration: 'none', color: 'white'}}>Cancel</Link>
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

export default connect(mapStateToProps) (EditMemberComp)