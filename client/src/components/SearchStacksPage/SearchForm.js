import React from 'react';

const SearchForm = props => {
    const { handleChange, handleSubmit, inputs: { query }, btnText, className } = props
    return (
        <form onSubmit={ handleSubmit } className={ className }>
            <input type="text" onChange={handleChange} value={query} name="query" placeholder="Search Stacks"/>
            <button>{btnText}</button>
        </form>
    );
}

export default SearchForm;
