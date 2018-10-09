import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Toggle from '../../shared/Toggle'
import Form from '../../shared/Form'
import QuestionForm from './QuestionForm'

const Question = props => {
    const { deleteQuestion, editQuestion, _id, question, answer } = props
    return (
        <div className="question">
            <Toggle render={({ toggle, isToggled }) => 
                <Fragment>
                    { !isToggled 
                        ?   <Fragment>
                                <span onClick={ toggle }>Edit</span><span onClick={() => deleteQuestion(_id)}>X</span>
                                <p>?: {question}</p>
                                <p>A: {answer}</p>
                            </Fragment>
                        :   <Fragment>
                                <Form 
                                    reset
                                    inputs={{ question: '', answer: '' }}
                                    submit={ inputs => editQuestion(_id, inputs)
                                                        .then(() => toggle())
                                                        .catch(err => console.log(err)) }
                                    render={ props => <QuestionForm {...props} btnText="Save" className="edit-question-form"/>} 
                                />
                                <span onClick={ toggle }>Close</span>
                            </Fragment>
                    }
                </Fragment>
            }/>
        </div>
    );
};

export default withRouter(Question);