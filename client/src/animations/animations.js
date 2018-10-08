import React from 'react'
import { CSSTransition } from 'react-transition-group'


export const PopUp = props => {
    return (
        <CSSTransition
            {...props}
            in={true}
            appear={true}
            timeout={150}
            classNames="popup"
        />
    )
}