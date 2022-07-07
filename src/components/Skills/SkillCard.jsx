import React from 'react'

export default function (props) {
  console.log(props.icons);
  return (
    <div className="skill-card">
        <div className='skill-card-inner'>
            <div className='skill-card-front'>
                <i class={props.icon}></i>
                <p>{props.front}</p>
            </div>
        </div>
    </div>
  )
}
