import React from "react";
import "./About.css";
import Info from "./Info";

function About() {
    return (
        <div className="about">
                <h1 className="about-title">About me</h1>
            <div className="page">
                <hr />
                <Info />
                <Info />
                <Info />
            </div>
        </div>
    )
}

export default About;