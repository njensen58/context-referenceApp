import React from 'react';
import { Link } from 'react-router-dom'
import './landingPage.css'

const LandingPage = props => {
    return (
        <div className="landing-page">
           <Link to="/login">Login</Link>
           <Link to="/allstacks">All Stacks</Link>
        </div>
    );
}

export default LandingPage;
