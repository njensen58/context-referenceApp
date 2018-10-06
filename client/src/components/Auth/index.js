import React from 'react'
import Form from '../../shared/Form'
import Toggle from '../../shared/Toggle'
import AuthForm from './AuthForm'
import { withUser } from '../../context/userContext'
import './authStyle.css'

const Auth = props => {
    console.log(props)
    return (
        <div className="auth-page">
            <Toggle render={({ isToggled, toggle }) => 
                <div>
                    <h2>{ isToggled ? "Sign Up" : "Login" }</h2>
                    { isToggled 
                        ?   <React.Fragment>
                                <Form 
                                    inputs={{ username: '', password: '' }}
                                    submit={ inputs => props.signup(inputs) }
                                    render={ props => <AuthForm {...props} btnText="Sign Up"/> }
                                    reset
                                />        
                            </React.Fragment> 
                        :   <React.Fragment>
                                <Form 
                                    inputs={{ username: '', password: '' }}
                                    submit={ inputs => props.login(inputs) }
                                    render={ props => <AuthForm {...props} btnText="Login"/> }
                                    reset
                                />
                            </React.Fragment> 
                    }             
                    <span onClick={toggle}>{ isToggled ? "Already a Member?" : "New Member?" }</span>
                </div>
            }/>
        </div>
    )
}

export default withUser(Auth)

