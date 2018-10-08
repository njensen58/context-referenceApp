import React from 'react';
import { withRouter } from 'react-router-dom'

const PublicSection = props => {
    const { _id } = props
    return (
        <div className="public-section" onClick={() => props.history.push(`/quiz/${_id}`)}>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default withRouter(PublicSection);