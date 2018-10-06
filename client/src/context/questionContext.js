import React, { Component } from 'react'
import axios from 'axios'

const QuestionContext = React.createContext()
const questionAxios = axios.create()

questionAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export class QuestionContextProvider extends Component {
    constructor(){
        super()
        this.state = {
            currentQuestions: []
        }
    }

    getSectionQuestions = sectionId => {
        questionAxios.get(`/api/question/${sectionId}`)
            .then(res => {
                this.setState(prevState => ({
                    currentQuestions: res.data
                }))
                return res
            })
    }

    createQuestion = newQuestion => {
        return questionAxios.post(`/api/question`, newQuestion)
            .then(res => {
                this.setState(prevState => ({
                    currentQuestions: [res.data, ...prevState.currentQuestions]
                }))
                return res
            })
    }

    deleteQuestion = questionId => {
        questionAxios.delete(`/api/question/${questionId}`)
            .then(res => {
                this.setState(prevState => ({
                    currentQuestions: prevState.currentQuestions.filter(q => q._id !== questionId)
                }))
                return res
            })
    }

    editQuestion = (questionId, updateInfo) => {
        return questionAxios.put(`/api/question/${questionId}`)
                .then(res => {
                    this.setState(prevState => ({
                        currentQuestions: prevState.currentQuestions.map(q => q._id === questionId ? res.data : q)
                    }))
                    return res
                })
    }

    render(){
       return (
            <QuestionContext.Provider
                value={{
                    getSectionQuestions: this.getSectionQuestions,
                    createQuestion: this.createQuestion,
                    deleteQuestion: this.deleteQuestion,
                    editQuestion: this.editQuestion,
                    ...this.state
                }}
            >
                {this.props.children}
            </QuestionContext.Provider>
        )
    }
}

export const withQuestion = Component => {
    return props => {
        return (
            <QuestionContext.Consumer>
                {
                    questionState => {
                        return (
                            <Component 
                                {...questionState}
                                {...props}
                            />
                        )
                    }
                }
            </QuestionContext.Consumer>
        )
    }
}