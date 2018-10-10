import React, { Component, Fragment } from 'react'
import AnimatedList from '../../shared/AnimatedList'
import Form from '../../shared/Form'
import Toggle from '../../shared/Toggle'
import SearchForm from './SearchForm'
import { withStack } from '../../context/stackContext'
import PublicStack from './PublicStack'
import './publicStack.css'


class SearchStacksPage extends Component {
    componentDidMount(){
        this.props.getAllStacks()
    }

    render(){
        const { currentStacks, token } = this.props
        // Possibly a side menu with filtering options.
        // Stacks are laid out vertically like bricks stacked on one another
        // button to login at the bottom left if not logged in
            // will redirect to login page
            // if logged in, button will not show on public page
                // instead it will be a link to "/mystacks" 


        return ( 
            <div className="public-stacks-container">

                {/* Search Form */}
                <Toggle render={({ toggle, isToggled }) => 
                    <Fragment>
                        <button onClick={toggle}> Search-ICON</button>
                        {isToggled &&
                            <Form 
                                reset
                                inputs={{ query: '' }}
                                submit={() => null}
                                render={ props => <SearchForm {...props} btnText="Search" className="search-form"/> }
                            />
                        }
                    </Fragment>
                }/>
                
                {/* Stack List */}
                <div>
                    <AnimatedList
                        classNames="slide-in"
                        timeout={300} 
                        data={currentStacks} 
                        component={ PublicStack } 
                        rest={{ }}/>
                </div>
            </div>
        )
    }
}

export default withStack(SearchStacksPage)