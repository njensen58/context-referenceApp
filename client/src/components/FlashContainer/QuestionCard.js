import React, { Fragment } from 'react'
import QuestionHeader from './QuestionHeader'
import QuestionAnswer from './QuestionAnswer'
import { CardFade } from '../../animations/animations.js'
import { Transition } from 'react-transition-group'
import Toggle from '../../shared/Toggle'

// const defaultStyles = {
//     opacity: 1,
//     height: '100%'
// }

// const transitionStyles = {
//     entering: { opacity: 0 },
//     entered:  { opacity: 1 },
//     exiting:  { opacity: 1 },
//     exited:   { opacity: 0 }
// }



const QuestionCard = props => {
    console.log(props)
    const {  currentQuestion: { question, answer }, _id } = props
    return (
        <div className="question-card-container">
            <Toggle render={({toggle, isToggled}) => 
                <Fragment>
                    <QuestionHeader question={question} toggle={toggle}/> 
                        <CardFade isToggled={isToggled}>
                            <QuestionAnswer answer={ answer } /> 
                        </CardFade>   
                </Fragment>
            }/>
        </div>
    )
}

export default QuestionCard;