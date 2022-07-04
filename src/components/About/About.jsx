import React from "react";
import "./About.css";
import Info from "./Info";

function About() {
    return (
        <div className="about">
            <div className="page">
                <h1 className="about-title">About me</h1>
                <hr />
                <Info />
                <Info />
                <Info />
            </div>
        </div>
    )
}

export default About;