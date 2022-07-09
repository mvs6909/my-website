import React from 'react';

export default function Skilltag(props) {
    let color = props.color;
    console.log(color)
  return (
    <div className="skill-tag" style={{backgroundColor: color}}>
        <p className='skilltag-data'>{props.skill}</p>
    </div>
  )
}
