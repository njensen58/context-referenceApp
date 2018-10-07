import React from 'react';
import { withRouter } from 'react-router-dom'

const PublicStack = props => {
    const { _id } = props
    return (
        <div className="public-stack" onClick={() => props.history.push(`/p/sections/${_id}`)}>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default withRouter(PublicStack);
