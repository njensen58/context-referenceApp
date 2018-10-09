import React, { Component } from 'react'
import Auth from './components/Auth'
import StacksPage from './components/StacksPage'
import SectionsPage from './components/SectionsPage'
import QuestionsPage from './components/QuestionsPage'
import SearchStacksPage from './components/SearchStacksPage'
import FlashContainer from './components/FlashContainer'
import ProtectedRoute from './shared/ProtectedRoute'
import BottomNav from './components/BottomNav'
import UserProfile from './components/UserProfile'
import { PageTransition } from './animations/animations.js'
import { withUser } from './context/userContext'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import PublicSectionsPage from './components/PublicSectionsPage';
import LandingPage from './components/LandingPage'


class App extends Component {
    componentDidMount(){
        this.props.verify()
    }
    render(){
        const { user, token, loading, location } = this.props
        return (
            <div>
                { loading 
                ?   <div> Loading... </div>
                :   <PageTransition location={location}>
                        <Switch>
                            <Route exact path="/"                    render={props => <LandingPage {...props} token={token}/> }/>
                            <Route exact path="/allstacks"           render={props => <SearchStacksPage {...props} user={user}/> }/>
                            <Route exact path="/p/sections/:stackId" render={props => <PublicSectionsPage {...props} user={user}/> }/> 
                            <Route exact path="/quiz/:sectionId"     render={props => <FlashContainer {...props} user={user}/> }/>
                            <Route 
                                path="/login" 
                                render={props => token
                                                ? <Redirect to="/mystacks" />
                                                : <Auth {...props}/>}/>
                            <ProtectedRoute 
                                path="/mystacks" 
                                component={StacksPage}
                                token={token}
                                redirectTo="/allstacks"/>
                            <ProtectedRoute 
                                path="/sections/:stackId"
                                component={SectionsPage}
                                token={token}
                                redirectTo="/allstacks"/>
                            <ProtectedRoute 
                                path="/questions/:sectionId"
                                component={QuestionsPage}
                                token={token}
                                redirectTo="/allstacks"/>
                            <ProtectedRoute 
                                exact path="/profile"
                                component={UserProfile}
                                token={token}
                                redirectTo="/allstacks"
                            />
                        </Switch>
                    </PageTransition>
                }
                { (location.pathname.slice(0, 4) !== '/qui' && location.pathname !== '/login') && <BottomNav /> }
            </div>
        )
    }
}

export default withRouter(withUser(App))