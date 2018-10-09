import React, { Fragment } from 'react';

const QuestionHeader = props => {
    const { question, toggle } = props
    return (
        <Fragment>
            <div className="question-header">
                <h3>{ question }</h3>
                <span>0</span>
            </div>
            <span onClick={ toggle }> V </span>
        </Fragment>
    );
}

export default QuestionHeader;
