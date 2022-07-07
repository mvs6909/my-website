import React from "react";
import ProjectCard from "./ProjectCard";
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

import "./Projects.css";

import projectData from "./ProjectCardsData";

function createProject(project){
    return (

        <ProjectCard icon={project.icon} title={project.title} description={project.description} />
    )
}


function Projects(){
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <Fade left>
                <dl className="cards">
                    {projectData.map(createProject)}
                </dl>
            </Fade>
        </div>
    )
}

export default Projects;