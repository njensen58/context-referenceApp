import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './context/userContext'
import { StackContextProvider } from './context/stackContext'
import { SectionContextProvider } from './context/sectionContext'
import { QuestionContextProvider } from './context/questionContext'
import App from './App'
import './index.css'
import './animations/animations.css'

ReactDOM.render(
    <UserContextProvider>
        <StackContextProvider>
            <SectionContextProvider>
                <QuestionContextProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </QuestionContextProvider>
            </SectionContextProvider>
        </StackContextProvider>
    </UserContextProvider>, 
document.getElementById("root"))