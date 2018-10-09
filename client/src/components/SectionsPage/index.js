import React, { Component, Fragment } from 'react';
import Toggle from '../../shared/Toggle'
import Form from '../../shared/Form'
import AnimatedList from '../../shared/AnimatedList'
import Section from './Section'
import StackSectionForm from '../StacksPage/StackSectionForm'
import { withSection } from '../../context/sectionContext'
import { PopUp } from '../../animations/animations.js'
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
                        <button onClick={ toggleAddForm }>{ isFormToggled ? "-" : "+" }</button>
                                { isFormToggled && 
                                    <Fragment>
                                        <div className={ isFormToggled ? "overlay" : "" }></div>
                                        <Form 
                                            reset
                                            inputs={{ title: '', description: '' }}
                                            submit={ inputs => createSection({ stack: this.props.match.params.stackId,  ...inputs })
                                                                    .then(() => toggleAddForm())
                                                                    .catch(err => console.log(err)) }
                                            render={ props => 
                                                <PopUp>
                                                    <StackSectionForm {...props} btnText="Submit" className="add-stack-form" formTitle="New Section"/> 
                                                </PopUp>
                                            }   
                                        /> 
                                    </Fragment>
                                }
                    </Fragment>
                }/>

                {/* Section List */}
                <div className="sections-container">
                    { currentSections.length > 0
                        ?   <AnimatedList 
                                classNames="slide-in"
                                timeout={300}
                                data={ currentSections } 
                                component={ Section } 
                                rest={{ deleteSection, editSection }}/>
                        : <h1>No Sections</h1>
                    }
                </div>
            </div>
        );
    }
};

export default withSection(SectionsPage);