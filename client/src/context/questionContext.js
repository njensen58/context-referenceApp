import React, { Component } from 'react'
import axios from 'axios'

const QuestionContext = React.createContext()

export class QuestionContextProvider extends Component {
    constructor(){
        super()
        this.state = {
            currentQuestions: []
        }
    }

    getSectionQuestions = sectionId => {

    }

    createQuestion = sectionId => {
        
    }

    render(){
        return (
            <QuestionContext.Provider
                value={{
                    ...this.state
                }}
            >
                {this.props.children}
            </QuestionContext.Provider>
        )
    }
}

export const withQuestion = Component => {
    return props => {
        return (
            <QuestionContext.Consumer>
                {
                    questionState => {
                        return (
                            <Component 
                                {...questionState}
                                {...props}
                            />
                        )
                    }
                }
            </QuestionContext.Consumer>
        )
    }
}