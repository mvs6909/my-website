import React from "react";
import "./Projects.css";

function ProjectCard(props){
    return (
        <div className="card">
            <dt>
                <span className="card-logo" role="img" aria-label="Tense Biceps">
                <i class={props.icon}></i>
                </span>
                <span className="card-title">{props.title}</span>
            </dt>
            <dd className="card-description">
                {props.description}
            </dd>
         </div>
    )
}

export default ProjectCard;