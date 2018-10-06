import React, { Component, Fragment } from 'react';
import Toggle from '../../shared/Toggle'
import Form from '../../shared/Form'
import List from '../../shared/List'
import Question from './Question'
import QuestionForm from './QuestionForm'
import { withQuestion } from '../../context/questionContext'
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
                        <button onClick={ toggleAddForm }>{ isFormToggled ? "Close" : "New Question" }</button>
                                { isFormToggled && 
                                    <Fragment>
                                        <div className={ isFormToggled ? "overlay" : "" }></div>
                                        <h3>New Question</h3>
                                        <Form 
                                            reset
                                            inputs={{ question: '', answer: '' }}
                                            submit={ inputs => createQuestion({ section: this.props.match.params.sectionId,  ...inputs })
                                                                    .then(() => toggleAddForm())
                                                                    .catch(err => console.log(err)) }
                                            render={ props => <QuestionForm {...props} btnText="Submit" className="add-question-form"/> }   
                                        /> 
                                    </Fragment>
                                }
                    </Fragment>
                }/>

                {/* Question List */}
                <div>
                    <List data={ currentQuestions } component={ Question } rest={{ deleteQuestion, editQuestion }}/>
                </div>

            </div>
        )
    }
}

export default withQuestion(QuestionsPage)