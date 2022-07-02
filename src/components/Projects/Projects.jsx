import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

import projectData from "../../ProjectCardsData";

function createProject(project){
    return (
        <ProjectCard icon={project.icon} title={project.title} description={project.description} />
    )
}


function Projects(){
    return (
        <div className="projects">
            <h1>Projects</h1>
            <dl className="cards">
                {projectData.map(createProject)}
            </dl>
        </div>
    )
}

export default Projects;