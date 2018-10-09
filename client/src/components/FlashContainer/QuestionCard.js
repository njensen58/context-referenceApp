import React, { Fragment } from 'react'
import QuestionHeader from './QuestionHeader'
import QuestionAnswer from './QuestionAnswer'
import { SlideDown } from '../../animations/animations.js'
import Toggle from '../../shared/Toggle'


const QuestionCard = props => {
    console.log(props)
    const {  currentQuestion: { question, answer }, _id } = props
    return (
        <div className="question-card-container">
            <Toggle render={({toggle, isToggled}) => 
                <Fragment>
                    <QuestionHeader question={question} toggle={toggle}/> 
                        <SlideDown id={_id}>
                            <QuestionAnswer answer={ answer } isToggled={isToggled}/> 
                        </SlideDown>
                </Fragment>
            }/>
        </div>
    )
}

export default QuestionCard;