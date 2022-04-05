import React from 'react'
import { AppBar, Button, makeStyles, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    button: {
        textDecoration: "none",
        color: "black",
        marginLeft: "10pt",
        marginRight: "10pt"
    }
})

function Navigation() {

    const classes = useStyles();

    function logOut() {
        localStorage.removeItem('token');
        document.cookie = 'loggedIn = false; max-age=1'
    }

    return (
        <AppBar position="relative">
            <Toolbar className={classes.root}>
                <Button>
                <Link to={process.env.PUBLIC_URL + '/'} className={classes.button}>Home</Link>
                </Button>
                <Button>
                <Link to={process.env.PUBLIC_URL + '/login'} className={classes.button}>Login</Link>
                </Button>
                <Button>
                <Link to={process.env.PUBLIC_URL + '/register'} className={classes.button}>Register</Link>
                </Button>
                <Button onClick={() => logOut()} className={classes.button}>Log Out</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation