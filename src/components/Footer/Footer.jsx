import React from 'react';
import "./Footer.css";
import footerData from "./footerData";
import Footerlink from './Footerlink';

function createFooterLink(link){
    return <Footerlink url={link.url} target={link.target} icon={link.icon} title={link.title} />
}
export default function Footer() {
  return (
    <div className='footer'>
        <h1 className='contact-title'>Contact Me</h1>
        <div className='footer-links'>
            {footerData.map(createFooterLink)}
        </div>
    </div>
  )
}


