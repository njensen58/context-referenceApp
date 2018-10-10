import React from 'react'

const FlashNav = props => {
    const { nextQ, prevQ } = props
    return (
        <div className="flash-nav">
            <button onClick={prevQ}>{"Prev"}</button>
            <button onClick={nextQ}>{"Next"}</button>
        </div>
    )
}

export default FlashNav