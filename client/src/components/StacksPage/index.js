import React, { Component } from 'react'
import Toggle from '../../shared/Toggle'
import Form from '../../shared/Form'
import List from '../../shared/List'
import StackSectionForm from './StackSectionForm'
import Stack from './Stack'
import { withStack } from '../../context/stackContext'
import { withUser } from '../../context/userContext'
import './stack.css'


class StacksPage extends Component {
    componentDidMount(){
        const user = JSON.parse(localStorage.getItem("user"))
        this.props.getUserStacks(user._id)
    }
    render(){
        console.log(this.props)
        const { currentStacks, createStack, deleteStack, editStack } = this.props
        return (
            <div className="stack-page">
                <Toggle render={({ toggle: toggleAddForm, isToggled: isFormToggled}) => 
                    <React.Fragment>
                        <button onClick={ toggleAddForm }>{ isFormToggled ? "Close" : "New Stack" }</button>
                        { isFormToggled && 
                            <React.Fragment>
                                <div className={ isFormToggled ? "overlay" : "" }></div>
                                <h3>New Stack</h3>
                                <Form 
                                    reset
                                    inputs={{ title: '', description: '' }}
                                    submit={ inputs => createStack(inputs)
                                                            .then(() => toggleAddForm())
                                                            .catch(err => console.log(err)) }
                                    render={ props => <StackSectionForm {...props} btnText="Submit" className="add-stack-form"/> }   
                                /> 
                            </React.Fragment>
                        }
                    </React.Fragment>
                }/>
                <div className="stacks-container">
                    <List data={currentStacks} component={ Stack } rest={{ deleteStack, editStack }}/>
                </div>
            </div>
        )
    }
}


export default withStack(withUser(StacksPage))