import React from "react";
import ProjectCard from "./ProjectCard";
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import Skilltag from "./Skilltag";

import "./Projects.css";

import projectData from "./ProjectCardsData";

function createProject(project){
    return (
        <ProjectCard key={project.id} icon={project.icon} title={project.title} description={project.description} url={project.url} skills={project.skills} color={project.color}/>
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
            <Skilltag />
            <button type="button" className="btn btn-primary projects-button" href="https://www.github.com/mvs6909">More</button>
        </div>
    )
}

export default Projects;