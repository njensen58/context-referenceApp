import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


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

export const PageTransition = props => {
    return (
        <TransitionGroup>
            <CSSTransition
         
                appear={true}
                key={props.location.key}
                classNames="page-change"
                timeout={1100}
            >
                { props.children }
            </CSSTransition>
        </TransitionGroup>
    )
}

export const Fade = (props) => {
    console.log(props)
    return (
        <TransitionGroup>         
            <CSSTransition
                {...props}
                in={true}
                appear={true}
                key={props.id}
                timeout={800}
                classNames="fade"
            >
            { props.children }
        </CSSTransition>
        </TransitionGroup>
    )
}



export const SlideDown = props => {
    return (
        
            <CSSTransition 
                {...props}
                in={true}
                appear={true}
                timeout={800}
                classNames="slide-down"
            />
       
    )
}