import React from 'react'
import ProjectCard from '../components/ProjectCard/ProjectCard'

function Portfolio(props) {
    console.log(props)
    return (
        <>
            <ProjectCard props={props}/>
        </>
    )
}

export default Portfolio
