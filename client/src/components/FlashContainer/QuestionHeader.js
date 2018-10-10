import React, { Fragment } from 'react';

const QuestionHeader = props => {
    const { question, toggle } = props
    return (
        <Fragment>
            <div className="question-header">
                <h3>{ question }</h3>
                <span>Book</span>
            </div>
            <button onClick={ toggle } className="show-answer-btn"> Answer </button>
        </Fragment>
    );
}

export default QuestionHeader;
