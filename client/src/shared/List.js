import React from 'react'

const List = props => {
    const { data, component: Component, rest } = props
    return  data.map(item => <Component {...item} {...rest} key={item._id} />)
}

export default List