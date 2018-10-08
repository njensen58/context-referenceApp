import React from 'react'
import { withUser } from '../../context/userContext'

const UserProfile = props => {
    const { user, logout } = props
    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default withUser(UserProfile)