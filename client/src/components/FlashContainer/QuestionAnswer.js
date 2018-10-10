import React from 'react';

const QuestionAnswer = props => {
    const { answer } = props
    return (
        <div className="question-answer">
            <p>{ answer }</p>
        </div>
    );
}

export default QuestionAnswer;
