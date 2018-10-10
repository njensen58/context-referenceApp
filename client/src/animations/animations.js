import React from 'react'
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group'


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
    const { in: inProp } = props
    return (
        <CSSTransition 
            {...props}
            in={inProp}
            appear={true}
            timeout={800}
            classNames="slide-down"
        />
    )
}


const fadeDefaultStyles = {
    opacity: 1,
    transition: `opacity 500ms linear`
}
const fadeTransitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 1 },
    exited:   { opacity: 0 }
}

export const CardFade = props => {
    const {isToggled, children} = props
    return (
         <Transition
            in={isToggled}
            timeout={300}>
            { (state) => (
                <div style={{
                    ...fadeDefaultStyles,
                    ...fadeTransitionStyles[state]
                }}>
                 { children }
                </div>
            )
            }
        </Transition>
    )
}

