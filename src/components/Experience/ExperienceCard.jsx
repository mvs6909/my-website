import React from 'react';
import "./Experience.css";

export default function ExperienceCard(props) {
  return (
<div className="exp">
    <dt>
        <span className="exp-logo" role="img">
        <i class={props.icon}></i>
        </span>
        <span className="exp-title">{props.title}</span>
    </dt>
    <dd className="exp-description">
        {props.description}
    </dd>
 </div>
  )
}
