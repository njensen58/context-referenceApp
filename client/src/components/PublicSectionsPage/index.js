import React, { Component, Fragment } from 'react'
import List from '../../shared/List'
import PublicSection from './PublicSection'
import { withSection } from '../../context/sectionContext'

class PublicSectionsPage extends Component {

    componentDidMount(){
        this.props.getPublicSections(this.props.match.params.stackId)
    }

    render(){
        const { currentSections } = this.props
        return (
            <div>


                <List data={currentSections} component={PublicSection} rest={{ }}/>
            </div>
        )
    }
}

export default withSection(PublicSectionsPage)