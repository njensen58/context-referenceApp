import React, { Fragment } from 'react';

const QuestionHeader = props => {
    const { question } = props
    return (
        <Fragment>
            <div className="question-header">
                <h3>{ question }</h3>
                <span>Book</span>
            </div>
        </Fragment>
    );
}

export default QuestionHeader;
