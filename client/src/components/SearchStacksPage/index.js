import React, { Component } from 'react'
import { withStack } from '../../context/stackContext'


class SearchStacksPage extends Component {
    componentDidMount(){
        this.props.getAllStacks()
    }

    render(){
        console.log(this.props)
        return ( 
            <div>

            </div>
        )
    }
}

export default withStack(SearchStacksPage)