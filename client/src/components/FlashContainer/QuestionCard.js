import React from 'react'
import QuestionHeader from './QuestionHeader'
import QuestionAnswer from './QuestionAnswer'
import { CardFade } from '../../animations/animations.js'


const QuestionCard = props => {
    const {  currentQuestion: { question, answer }, toggle, isToggled } = props
    return (
        <div className="question-card-container">
            <QuestionHeader question={question} toggle={toggle} /> 
                <CardFade isToggled={isToggled}>
                    <QuestionAnswer answer={ answer } /> 
                </CardFade>   
        </div>
    )
}

export default QuestionCard