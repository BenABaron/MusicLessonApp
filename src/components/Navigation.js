import React from 'react'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Button>
                <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
                </Button>
                <Button>
                <Link to={process.env.PUBLIC_URL + '/login'}>Login</Link>
                </Button>
                <Button>
                <Link to={process.env.PUBLIC_URL + '/register'}>Register</Link>
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation