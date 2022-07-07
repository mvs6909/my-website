import React from 'react';
import { Button } from 'react-bootstrap';

export default function (props) {
  return (
        <Button variant="light" className="footer-link" href={props.url} target={props.target}>
            <i class={props.icon}></i>
            <div className='footerName'>

            {props.title}
            </div>
        </Button>
  )
}
