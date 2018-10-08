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

    deleteSection = sectionId => {
        sectionAxios.delete(`/api/section/${sectionId}`)
            .then(res => {
                this.setState(prevState => ({
                    currentSections: prevState.currentSections.filter(section => section._id !== sectionId)
                }))
                return res
            })
    }

    editSection = (sectionId, updateInfo) => {
        return sectionAxios.put(`/api/section/update/${sectionId}`, updateInfo)
            .then(res => {
                this.setState(prevState => ({
                    currentSections: prevState.currentSections.map(section => section._id === sectionId ? res.data : section)
                }))
                return res
            })
    }

    getPublicSections = stackId => {
        axios.get(`/public/sections/${stackId}`)
            .then(res => {
                this.setState(prevState => ({
                    currentSections: res.data
                }))
                return res
            })
    }

    render(){
        return (
            <SectionContext.Provider
                value={{
                    getPublicSections: this.getPublicSections,
                    getSections: this.getSections,
                    createSection: this.createSection,
                    deleteSection: this.deleteSection,
                    editSection: this.editSection,
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