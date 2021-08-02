import React from 'react'

function ProjectCard(props) {
    console.log(props)
    return (
        <>

            {props.props.projects.map(project => (
                <div className="card" style={{width: '18rem'}}>
                    <img src={project.img} className="card-img-top" alt="budget tracker image"/>
                        <div className="card-body">
                            <h5 className="card-title">{project.name}</h5>
                            <a target="_blank" href={project.github}>Click to view on GitHub!</a>
                            <br></br>
                            <a target="_blank" href={project.deployed}>Click to view the Deployed Application!</a>
                        </div>
                </div>
            ))}

        
        </>
    )
}

export default ProjectCard
