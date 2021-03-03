import React, { useState } from 'react'
import MemberComp from './Member'
import AddMemberComp from './AddMember'
// Material UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

function MembersComp(props) {

    const [ showAddMember, setShowAddMember ] = useState(false)
    


    return (
        <div className="page_header_container">
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
                <Button variant="contained" color='primary' style={{marginRight: '10px'}}>
                    <Link style={{textDecoration: 'none', color: 'black'}} to='/members'>All Members</Link>
                </Button>
                <Button variant="outlined" color='primary'>
                    <Link style={{textDecoration: 'none', color: 'black'}} to='/members/addMember'>Add Member</Link>
                </Button>
            </Typography>
            
            {showAddMember 
            ?
            <AddMemberComp/>
            :
            <Grid container item xs={12} justify="center">
                    {props.data.members.length > 0 
                    ? 
                    props.data.members.map(member => {
                        return (
                            <MemberComp 
                                key={member.id} 
                                member={member} 
                            />
                        )
                        })
                    :
                    "NO MEMBERS"
                    }
            </Grid>
            } 
        </div>
    )
}

const mapStateToProps = (state) =>
{
  return {
    data : state
  }
}

export default connect(mapStateToProps)(MembersComp);