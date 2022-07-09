import React from "react";
import "./Projects.css";
import Skilltag from "./Skilltag";

function createSkilltag(skill,color){
    return <Skilltag skill={skill} color={color}/>
}
function ProjectCard(props){
    let color = props.color;
    return (
        <div className="card">
            <a href={props.url} target="_blank">
 
            <dt>
                <span className="card-logo" style={{color: color}} role="img" aria-label="Tense Biceps">
                <i class={props.icon}></i>
                </span>
                <span className="card-title">{props.title}</span>
            </dt>
            {props.skills.map((skill) => { return <Skilltag skill={skill} color={color}/>})}
            <dd className="card-description">
                {props.description}
            </dd>
            </a>
         </div>
    )
}

export default ProjectCard;