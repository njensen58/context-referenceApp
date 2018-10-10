import React, { Component, Fragment } from 'react'
import QuestionCard from './QuestionCard'
import FlashNav from './FlashNav'
import { Route } from 'react-router-dom'
import { withQuestion } from '../../context/questionContext'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Fade } from '../../animations/animations.js'
import './flashStyles.css'

// One question presented at a time, working randomly through the collection of cards in the section.
// Question presented: when clicked, question slides upward and answer presented in window below question.
// You can bookmark a question to put it in your review later list.

// Navigation
    // Bottom nav has left arrow, right arrow, and 'show'
    // Top left has a "Quit" button
    // Top right has a count of which card / how many cards total

class FlashContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
           questions: [{_id: ''}],
           count: 0
        }
    }

    componentDidMount(){
        this.props.getPublicQuestions(this.props.match.params.sectionId)
            .then(() => {
                this.setState({
                    questions: this.props.currentQuestions
                })
            })
            .catch(err => console.log(err))
    }

    nextQuestion = () => {
        if(this.state.count < this.state.questions.length - 1){
            this.setState(prevState => ({
                count: prevState.count + 1
            }))
        }
    }

    prevQuestion = () => {
        if(this.state.count > 0){
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
        }
    }

    quit = () => {
        this.setState({
            questions: [{_id: ''}],
            count: 0
        }, () => this.props.history.push('/allstacks'))
    }

    render(){
        const { questions, count } = this.state
        return (
            <div className="flash-container">
                <button onClick={this.quit}>Quit</button>
                    <div className="question-container">
                        <Fade id={questions[count]._id}>
                            <QuestionCard currentQuestion={questions[count]}/>
                        </Fade> 
                    </div>
                <FlashNav nextQ={ this.nextQuestion } prevQ={ this.prevQuestion }/>
            </div>
        )
    }
}

export default withQuestion(FlashContainer)