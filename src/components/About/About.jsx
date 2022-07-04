import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import Info from "./Info";
import infoData from "./infoData";

function creatInfo(inform){
    return (
        <Info title={inform.title} data={inform.data} />
    )
}

function About() {
    console.log(infoData);
    return (
        <div className="about">
            <div className="page">
                <Zoom delay={200}>
                    <h1 className="about-title">About me</h1>
                </Zoom>
                <hr />
                {infoData.map(inform => {
                    return <Fade right delay={300}>
                    <Info title={inform.title} data={inform.data} />
                    </Fade>
                })}
            </div>
        </div>
    )
}

export default About;