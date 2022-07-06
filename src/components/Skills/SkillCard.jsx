import React from 'react'

export default function (props) {
  return (
    <div className="skill-card">
        <div className='skill-card-inner'>
            <div className='skill-card-front'>
                <p>{props.front}</p>
            </div>
            <div className='skill-card-back'>
                <p>{props.back}</p>
            </div>
        </div>
    </div>
  )
}
