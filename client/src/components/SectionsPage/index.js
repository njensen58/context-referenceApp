import React, { Component, Fragment } from 'react';
import Toggle from '../../shared/Toggle'
import Form from '../../shared/Form'
import List from '../../shared/List'
import Section from './Section'
import StackSectionForm from '../StacksPage/StackSectionForm'
import { withSection } from '../../context/sectionContext'
import './section.css'

class SectionsPage extends Component {

    componentDidMount(){
        this.props.getSections(this.props.match.params.stackId)
    }

    render(){
        const { createSection, currentSections, deleteSection, editSection } = this.props
        return (
            <div className="section-page">

                {/* Add New Section */}
                <Toggle render={({ toggle: toggleAddForm, isToggled: isFormToggled }) => 
                    <Fragment>
                        <button onClick={ toggleAddForm }>{ isFormToggled ? "Close" : "New Section" }</button>
                                { isFormToggled && 
                                    <Fragment>
                                        <div className={ isFormToggled ? "overlay" : "" }></div>
                                        <h3>New Section</h3>
                                        <Form 
                                            reset
                                            inputs={{ title: '', description: '' }}
                                            submit={ inputs => createSection({ stack: this.props.match.params.stackId,  ...inputs })
                                                                    .then(() => toggleAddForm())
                                                                    .catch(err => console.log(err)) }
                                            render={ props => <StackSectionForm {...props} btnText="Submit" className="add-stack-form"/> }   
                                        /> 
                                    </Fragment>
                                }
                    </Fragment>
                }/>

                {/* Section List */}
                <div>
                    <List data={ currentSections } component={ Section } rest={{ deleteSection, editSection }}/>
                </div>
            </div>
        );
    }
};

export default withSection(SectionsPage);