import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import Info from "./Info";

function About() {
    return (
        <div className="about">
            <div className="page">
                <Zoom>

                <h1 className="about-title">About me</h1>
                </Zoom>
                <hr />
                <Fade right>
                    <Info />
                    <Info />
                    <Info />
                </Fade>
            </div>
        </div>
    )
}

export default About;