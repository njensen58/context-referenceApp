import React, { Component } from 'react'
import axios from 'axios'

const UserContext = React.createContext()

const authAxios = axios.create()

authAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export class UserContextProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: {},
            token: '',
            loading: true
        }
    }

    signup = userInfo => {
        axios.post('/auth/signup', userInfo)
            .then(res => {
                const { token, user } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.authenticate(user, token)
                return res // .catch is after the .then of this function call
            })
    }

    login = credentials => {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { token, user } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.authenticate(user, token)
                return res
            })
    }

    authenticate = (user, token) => {
        this.setState({
            loading: false,
            user,
            token
        })
    }

    logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.setState({
            loading: false,
            user: {},
            token: ''
        })
    }

    verify = () => {
        authAxios.get(`/api/user`)
            .then(res => {
                const user = res.data
                const token = localStorage.getItem('token')
                this.authenticate(user, token)
            })
    }


    render(){
        return (
            <UserContext.Provider
                value={{
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    verify: this.verify,
                    ...this.state
                }}
            >
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export const withUser = Component => {
    return props => {
        return (
            <UserContext.Consumer>
                {
                    userState => {
                        return (
                            <Component 
                                {...userState}
                                {...props}
                            />
                        )
                    }
                }
            </UserContext.Consumer>
        )
    }
}