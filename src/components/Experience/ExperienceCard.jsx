import React from 'react';
import "./Experience.css";

export default function ExperienceCard(props) {
    let src=props.icon;
  return (
<div className="exp">
    <a href={props.url} target="_blank">
        <img className="img" src={require(`../../assets/${src}`)}></img>
        <p className="exp-title">{props.title}</p>
    <dd className="exp-description">
        {props.description}
    </dd>
    </a>
 </div>
  )
}
