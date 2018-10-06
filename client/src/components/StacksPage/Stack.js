import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Toggle from '../../shared/Toggle'
import Form from '../../shared/Form'
import StackSectionForm from './StackSectionForm'


const Stack = props => {
    const { deleteStack, editStack, _id, title, description } = props
    return (
        <div className="stack">
            <Toggle render={({ toggle, isToggled }) => 
                <Fragment>
                    { !isToggled 
                        ?   <Fragment>
                                <span onClick={ toggle }>Edit</span><span onClick={() => deleteStack(_id)}>X</span>
                                <p>{title}</p>
                                <p>{description}</p>
                                <button onClick={() => props.history.push(`/sections/${_id}`)}>Open</button>
                            </Fragment>
                        :   <Fragment>
                                <Form 
                                    reset
                                    inputs={{ title: '', description: '' }}
                                    submit={ inputs => editStack(_id, inputs)
                                                        .then(() => toggle())
                                                        .catch(err => console.log(err)) }
                                    render={ props => <StackSectionForm {...props} btnText="Save" className="edit-stack-form"/>} 
                                />
                                <span onClick={ toggle }>Close</span>
                            </Fragment>
                    }
                </Fragment>
            }/>
        </div>
    )
}

export default withRouter(Stack)

