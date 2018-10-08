import React, { Fragment } from 'react'

const StackSectionForm = props => {
    const { handleChange, handleSubmit, inputs: { title, description }, btnText, className, formTitle } = props
    return (
        <Fragment>
            <form onSubmit={handleSubmit} className={className}>
                <h1>{formTitle}</h1>
                <input 
                    type="text" 
                    name="title" 
                    value={title} 
                    onChange={handleChange} 
                    placeholder="Title"/>
                <input 
                    type="text" 
                    name="description" 
                    value={description} 
                    onChange={handleChange} 
                    placeholder="Description"/>
                <button>{btnText}</button>
            </form>
        </Fragment>
    )
}

export default StackSectionForm