import React from 'react';

export default function (props) {
  return (
    <div className="skill-card">
        <div className='skill-card-inner'>
            <div className='skill-card-front'>
                <i class={props.icon+" skill-logo"}></i>
                <p>{props.front}</p>
            </div>
        </div>
    </div>
  )
}
