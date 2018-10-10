import React, { Component, Fragment } from 'react'
import Toggle from '../../shared/Toggle'
import Form from '../../shared/Form'
import AnimatedList from '../../shared/AnimatedList'
import StackSectionForm from './StackSectionForm'
import Stack from './Stack'
import { withStack } from '../../context/stackContext'
import { withUser } from '../../context/userContext'
import { PopUp } from '../../animations/animations.js'
import './stack.css'


class StacksPage extends Component {

    componentDidMount(){
        const user = JSON.parse(localStorage.getItem("user"))
        this.props.getUserStacks(user._id)
    } 
    
    render(){
        const { currentStacks, createStack, deleteStack, editStack } = this.props
        return (
            <div className="stack-page">

                 {/* Add New Stack Form */}
                <Toggle render={({ toggle: toggleAddForm, isToggled: isFormToggled}) => 
                    <Fragment>
                        <button onClick={ toggleAddForm }>{ isFormToggled ? "-" : "+" }</button>                
                        { isFormToggled &&    
                            <Fragment>                                         
                                <div className={ isFormToggled ? "overlay" : "" }></div> 
                                <Form 
                                    reset
                                    inputs={{ title: '', description: '' }}
                                    submit={ inputs => createStack(inputs)
                                                            .then(() => toggleAddForm())
                                                            .catch(err => console.log(err)) }
                                    render={ props =>                             
                                                <PopUp>
                                                    <StackSectionForm {...props} btnText="Submit" className="add-stack-form" formTitle="New Stack"/>
                                                </PopUp>         
                                    }
                                /> 
                            </Fragment>
                        }                    
                    </Fragment>
                }/>

                {/* Stack List */}
                <div className="stacks-container">
                    <AnimatedList 
                        classNames="slide-in"
                        timeout={600}
                        data={currentStacks} 
                        component={ Stack } 
                        rest={{ deleteStack, editStack }}/>
                </div>
            </div>
        )
    }
}


export default withStack(withUser(StacksPage))