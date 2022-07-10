import React from 'react';
import "./Experience.css";
import Skilltag from '../Projects/Skilltag';

export default function ExperienceCard(props) {
    let src=props.icon;
    let color=props.color;
  return (
<div className="exp">
    <a href={props.url} target="_blank">
        <img className="img" src={require(`../../assets/${src}`)}></img>
        <p className="exp-title">{props.title}</p>
    <div className="skill-tags">

      {props.skills.map((skill) => { return <Skilltag skill={skill} color={color}/>})}
    </div>
    <dd className="exp-description">
        {props.description}
    </dd>
    </a>
 </div>
  )
}
