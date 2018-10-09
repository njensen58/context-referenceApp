import React from 'react';

const QuestionAnswer = props => {
    const { answer, isToggled } = props
    return (
        <div className={ !isToggled ? "q-hidden" : "question-answer"}>
            <p>{ answer }</p>
        </div>
    );
}

export default QuestionAnswer;
