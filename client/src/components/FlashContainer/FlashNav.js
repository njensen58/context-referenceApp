import React from 'react'

const FlashNav = props => {
    const { nextQ, prevQ } = props
    return (
        <div className="flash-nav">
            <button onClick={prevQ}>{"<="}</button>
            <button onClick={nextQ}>{"=>"}</button>
        </div>
    )
}

export default FlashNav