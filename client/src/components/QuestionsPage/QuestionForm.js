import React from 'react';

const QuestionForm = props => {
    const { handleChange, handleSubmit, inputs: { question, answer }, btnText, className, formTitle } = props
    return (
        <form onSubmit={handleSubmit} className={ className }>
            <h1>{formTitle}</h1>
            <input type="text" onChange={handleChange} value={question} name="question" placeholder="Question"/>
            <textarea type="text" onChange={handleChange} cols={20} rows={5} value={answer} name="answer" placeholder="Answer"/>
            <button>{btnText}</button>
        </form>
    );
};

export default QuestionForm;