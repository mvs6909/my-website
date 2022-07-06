import React from 'react';
import "./Experience.css";

export default function ExperienceCard(props) {
    let src=props.icon;
    console.log(src)
  return (
<div className="exp">
    <dt>
        <img className="img" src={require(`../../assets/${src}`).default}></img>
        <span className="exp-title">{props.title}</span>
    </dt>
    <dd className="exp-description">
        {props.description}
    </dd>
 </div>
  )
}
