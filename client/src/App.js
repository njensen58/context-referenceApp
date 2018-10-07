import React, { Component } from 'react'
import Auth from './components/Auth'
import StacksPage from './components/StacksPage'
import SectionsPage from './components/SectionsPage'
import QuestionsPage from './components/QuestionsPage'
import SearchStacksPage from './components/SearchStacksPage'
import QuizContainer from './components/QuizContainer'
import ProtectedRoute from './shared/ProtectedRoute'
import { withUser } from './context/userContext'
import { Route, Redirect, Switch } from 'react-router-dom'
import PublicSectionsPage from './components/PublicSectionsPage';


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
                :   <Switch>
                        <Route exact path="/" render={props =>  <SearchStacksPage {...props} user={user}/> } />
                        <Route exact path="/p/sections/:stackId" render={props => <PublicSectionsPage {...props} user={user}/>}/> 
                        <Route exact path="/quiz/:sectionId" render={props => <QuizContainer {...props} user={user} />}/>
                        <Route 
                            path="/login" 
                            render={props => token
                                            ? <Redirect to="/mystacks" />
                                            : <Auth {...props}/>}/>
                        <ProtectedRoute 
                            path="/mystacks" 
                            component={StacksPage}
                            token={token}
                            redirectTo="/login"/>
                        <ProtectedRoute 
                            path="/sections/:stackId"
                            component={SectionsPage}
                            token={token}
                            redirectTo="/login"/>
                        <ProtectedRoute 
                            path="/questions/:sectionId"
                            component={QuestionsPage}
                            token={token}
                            redirectTo="/login"/>
                    </Switch>
                }
            </div>
        )
    }
}

export default withUser(App)