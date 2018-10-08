import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withUser } from '../../context/userContext'
import './navStyle.css'


const BottomNav = ({ token, history }) => {
    return(
        <div className="nav">
            <button onClick={history.goBack}>Back</button>
            { !token && <Link to="/login">Login</Link> }
            <Link to="/allstacks">All Stacks</Link>
            { token && <Link to="/mystacks">My Stacks</Link> }
            { token && <Link to="/profile">Profile</Link> }   
        </div>
    )
}

export default withRouter(withUser(BottomNav))