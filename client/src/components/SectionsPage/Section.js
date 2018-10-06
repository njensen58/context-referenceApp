import React from 'react';

const Section = props => {
    const { title, description } = props
    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );
};

export default Section;