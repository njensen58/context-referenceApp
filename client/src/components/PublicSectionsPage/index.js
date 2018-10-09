import React, { Component } from 'react'
import AnimatedList from '../../shared/AnimatedList'
import PublicSection from './PublicSection'
import { withSection } from '../../context/sectionContext'

class PublicSectionsPage extends Component {

    componentDidMount(){
        this.props.getPublicSections(this.props.match.params.stackId)
    }

    render(){
        const { currentSections } = this.props
        return (
            <div className="public-sections-container">
                <AnimatedList 
                    classNames="slide-in"
                    timeout={300} 
                    data={currentSections} 
                    component={PublicSection} 
                    rest={{ }}/>
            </div>
        )
    }
}

export default withSection(PublicSectionsPage)