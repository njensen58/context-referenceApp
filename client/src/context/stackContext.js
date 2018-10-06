import React, { Component } from 'react'
import axios from 'axios'


const StackContext = new React.createContext()
const stackAxios = axios.create()

stackAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export class StackContextProvider extends Component {
    constructor(){
        super()
        this.state = {
            currentStacks: []
        }
    }

    getTopStacks = (userId) => {
   
    }

    getUserStacks = userId => {
        stackAxios.get(`/api/stack/userstacks/${userId}`)
            .then(res => {
                this.setState(prevState => ({
                    ...prevState,
                    currentStacks: res.data
                }))
                return res
            })
    }

    getSpecificStack = stackId => {

    }

    getFilteredStacks = query => {

    }

    createStack = newStack => {
        return stackAxios.post('/api/stack', newStack)
                .then(res => {
                    this.setState(prevState => ({
                        currentStacks: [...prevState.currentStacks, res.data]
                    }))
                    return res
                })
    }

    deleteStack = stackId => {
        stackAxios.delete(`/api/stack/${stackId}`)
            .then(res => {
                this.setState(prevState => ({
                    currentStacks: prevState.currentStacks.filter(stack => stack._id !== stackId)
                }))
                return res
            })
    }

    editStack = (stackId, updateInfo) => {
        return stackAxios.put(`/api/stack/${stackId}`, updateInfo)
                .then(res => {
                    console.log(res)
                    this.setState(prevState => ({
                        currentStacks: prevState.currentStacks.map(stack => stack._id === stackId ? res.data : stack)
                    }))
                    return res
                })
    }

    render(){
        return( 
            <StackContext.Provider
                value={{
                    getTopStacks: this.getTopStacks,
                    getUserStacks: this.getUserStacks,
                    getSpecificStack: this.getSpecificStack,
                    getFilteredStacks: this.getFilteredStacks,
                    createStack: this.createStack,
                    deleteStack: this.deleteStack,
                    editStack: this.editStack,
                    ...this.state
                }}
            >
                {this.props.children}
            </StackContext.Provider>
        )
    }
}

export const withStack = Component => {
    return props => {
        return (
            <StackContext.Consumer>
                {
                    stackState => {
                        return (
                            <Component 
                                {...stackState}
                                {...props}
                            />
                        )
                    }
                }
            </StackContext.Consumer>
        )
    }
}