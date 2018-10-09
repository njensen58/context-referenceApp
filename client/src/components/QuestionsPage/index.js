import React, { Component, Fragment } from 'react';
import Toggle from '../../shared/Toggle'
import Form from '../../shared/Form'
import AnimatedList from '../../shared/AnimatedList'
import Question from './Question'
import QuestionForm from './QuestionForm'
import { withQuestion } from '../../context/questionContext'
import { PopUp } from '../../animations/animations.js'
import './question.css'


class QuestionsPage extends Component {
    
    componentDidMount(){
        this.props.getSectionQuestions(this.props.match.params.sectionId)
    }

    render(){
        const { createQuestion, currentQuestions, deleteQuestion, editQuestion } = this.props
        return (
            <div className="question-page">

                {/* Add New Question */}
                <Toggle render={({ toggle: toggleAddForm, isToggled: isFormToggled }) => 
                    <Fragment>
                        <button onClick={ toggleAddForm }>{ isFormToggled ? "-" : "+" }</button> 
                                { isFormToggled && 
                                    <Fragment>
                                        <div className={ isFormToggled ? "overlay" : "" }></div>
                                        <Form 
                                            reset
                                            inputs={{ question: '', answer: '' }}
                                            submit={ inputs => createQuestion({ section: this.props.match.params.sectionId,  ...inputs })
                                                                    .then(() => toggleAddForm())
                                                                    .catch(err => console.log(err)) }
                                            render={ props => 
                                                <PopUp>
                                                    <QuestionForm {...props} btnText="Submit" className="add-question-form" formTitle="New Question"/>
                                                </PopUp>
                                            }   
                                        /> 
                                    </Fragment>
                                }
                    </Fragment>
                }/>

                {/* Question List */}
                <div className="questions-container">
                    { currentQuestions.length > 0
                        ?   <AnimatedList 
                                classNames="slide-in"
                                timeout={300}
                                data={ currentQuestions } 
                                component={ Question } 
                                rest={{ deleteQuestion, editQuestion }}/>
                        :   <h1>No Questions</h1>
                    }
                </div>

            </div>
        )
    }
}

export default withQuestion(QuestionsPage)