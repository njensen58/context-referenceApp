import React, { Component } from 'react'
import axios from 'axios'

const SectionContext = new React.createContext()
const sectionAxios = axios.create()

sectionAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export class SectionContextProvider extends Component {
    constructor(){
        super()
        this.state = {
            currentSections: []
        }
    }

    getSections = stackId => {
        sectionAxios.get(`/api/section/${stackId}`)
            .then(res => {
                this.setState(prevState => ({
                    currentSections: res.data
                }))
                return res
            })
    }

    createSection = newSection => {
        return sectionAxios.post('/api/section', newSection)
                .then(res => {
                    this.setState(prevState => ({
                        currentSections: [res.data, ...prevState.currentSections]
                    }))
                    return res
                })
    }

    render(){
        return (
            <SectionContext.Provider
                value={{
                    getSections: this.getSections,
                    createSection: this.createSection,
                    ...this.state
                }}
            >
                {this.props.children}
            </SectionContext.Provider>
        )
    }
}

export const withSection = Component => {
    return props => {
        return (
            <SectionContext.Consumer>
                {
                    sectionState => {
                        return (
                            <Component 
                                {...sectionState}
                                {...props}
                            />
                        )
                    }
                }
            </SectionContext.Consumer>
        )
    }
}