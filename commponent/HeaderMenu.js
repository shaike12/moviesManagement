import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        width: '100%',
        textDecoration: 'none',
        color: 'white',
        
    }
}));

export default function MenuAppBar() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to='/movies'>Movies</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to='/members'>Subscriptions</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to='/users_management'>Users Management</Link>
                    </Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
                            label={auth ? 'Logout' : 'Login'}
                        />
                    </FormGroup>
                    {auth && (
                    <div>
                        <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        >
                        <AccountCircle />
                        </IconButton>
                    </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
