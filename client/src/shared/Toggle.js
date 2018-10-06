import { Component } from 'react'

export default class Toggle extends Component {
    constructor(props){
        super(props)
        this.state = { isToggled: props.isToggled || false }
    }
    toggle = () => this.setState(prevState => ({ isToggled: !prevState.isToggled }))
    render(){
        return this.props.render({
            isToggled: this.state.isToggled,
            toggle: this.toggle
        })
    }
}