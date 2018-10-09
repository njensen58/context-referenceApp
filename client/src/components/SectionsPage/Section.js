import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Toggle from '../../shared/Toggle'
import Form from '../../shared/Form'
import StackSectionForm from '../StacksPage/StackSectionForm'

const Section = props => {
    const { deleteSection, editSection, _id, title, description } = props
    return (
        <div className="section">
            <Toggle render={({ toggle, isToggled }) => 
                <Fragment>
                    { !isToggled 
                        ?   <Fragment>
                                <span onClick={ toggle }>Edit</span><span onClick={() => deleteSection(_id)}>X</span>
                                <p>{title}</p>
                                <p>{description}</p>
                                <button onClick={() => props.history.push(`/questions/${_id}`)}>Open</button>
                            </Fragment>
                        :   <Fragment>
                                <Form 
                                    reset
                                    inputs={{ title: '', description: '' }}
                                    submit={ inputs => editSection(_id, inputs)
                                                        .then(() => toggle())
                                                        .catch(err => console.log(err)) }
                                    render={ props => <StackSectionForm {...props} btnText="Save" className="edit-section-form"/>} 
                                />
                                <span onClick={ toggle }>Close</span>
                            </Fragment>
                    }
                </Fragment>
            }/>
        </div>
    );
};

export default withRouter(Section);