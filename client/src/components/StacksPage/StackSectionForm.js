import React from 'react'

const StackSectionForm = props => {
    const { handleChange, handleSubmit, inputs: { title, description }, btnText, className } = props
    return (
        <form onSubmit={handleSubmit} className={className}>
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
    )
}

export default StackSectionForm