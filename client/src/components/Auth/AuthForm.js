import React from 'react'

const AuthForm = props => {
    const { handleChange, handleSubmit, inputs: { username, password }, btnText } = props
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="username" value={username} placeholder="Username"/>
            <input type="text" onChange={handleChange} name="password" value={password} placeholder="Password"/>
            <button>{btnText}</button>
        </form>
    )
}

export default AuthForm