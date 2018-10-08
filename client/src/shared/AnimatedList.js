import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const AnimatedList = props => {
    const { data, component: Component, rest, timeout, classNames } = props
    return (
        <TransitionGroup>
            { data.map(item => 
                <CSSTransition
                    key={item._id}
                    in={true}
                    appear={true}
                    classNames={classNames}
                    timeout={timeout}
                >
                    <Component {...item} {...rest} key={item._id}/>
                </CSSTransition>
            )}
        </TransitionGroup>
    )
}

export default AnimatedList;