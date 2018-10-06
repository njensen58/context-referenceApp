import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

export default class ProtectedRoute extends Component {
    render(){
        const { token, redirectTo, component: Component, path } = this.props
        return ( token 
            ? <Route path={path} component={Component}/>
            : <Redirect to={redirectTo}/>
        )
    }
}

