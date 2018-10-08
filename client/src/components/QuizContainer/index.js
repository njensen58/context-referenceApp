import React, { Component, Fragment } from 'react'
import { withQuestion } from '../../context/questionContext'

// One question presented at a time, working randomly through the collection of cards in the section.
// Question presented: when clicked, question slides upward and answer presented in window below question.
// You an do a session to answer all questions and see how many you get right


class QuizContainer extends Component {
    componentDidMount(){
        this.props.getPublicQuestions(this.props.match.params.sectionId)
    }
    render(){
        console.log(this.props)
        return (
            <div>
                QUIZ CONTAINER
            </div>
        )
    }
}

export default withQuestion(QuizContainer)