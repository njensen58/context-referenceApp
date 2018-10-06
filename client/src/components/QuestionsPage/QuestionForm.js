import React from 'react';

const QuestionForm = props => {
    const { handleChange, handleSubmit, inputs: { question, answer }, btnText, className } = props
    return (
        <form onSubmit={handleSubmit} className={ className }>
            <input type="text" onChange={handleChange} value={question} name="question" placeholder="Question"/>
            <textarea type="text" onChange={handleChange} cols={20} rows={5} value={answer} name="answer" placeholder="Answer"/>
            <button>{btnText}</button>
        </form>
    );
};

export default QuestionForm;