import React, { Component } from 'react'
import Auth from './components/Auth'
import StacksPage from './components/StacksPage'
import SectionsPage from './components/SectionsPage'
import ProtectedRoute from './shared/ProtectedRoute'
import { withUser } from './context/userContext'
import { Route, Redirect, Switch } from 'react-router-dom'


class App extends Component {
    componentDidMount(){
        this.props.verify()
    }
    render(){
        const { user, token, loading } = this.props
        return (
            <div>
                { loading 
                ? <div> Loading... </div>
                :
                <Switch>
                    <Route 
                        exact path="/" 
                        render={props => token
                                        ? <Redirect to="/stacks" />
                                        : <Auth {...props}/>}/>
                    <ProtectedRoute 
                        path="/stacks" 
                        component={StacksPage}
                        token={token}
                        redirectTo="/"/>
                    <ProtectedRoute 
                        path="/sections/:stackId"
                        component={SectionsPage}
                        token={token}
                        redirectTo="/"
                    />
                </Switch>
                }
            </div>
        )
    }
}

export default withUser(App)