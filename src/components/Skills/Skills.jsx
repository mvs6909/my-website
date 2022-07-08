import React from "react";
import ImgCube from "./ImgCube";
import skillCardData from "./skillCardData";
import SkillCard from "./SkillCard";
import Zoom from "react-reveal/Zoom";
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';
import {Container, Row, Col} from "react-bootstrap";
import "./Skills.css"

function createSkillCard(info){
    return (

    <SkillCard front={info.front} back={info.back} icon={info.icon} />
    )
}

function Skills(){
    return (
        <div className="skills" id="skills">
        <h1 className="skill-title">My Skills</h1>
        <ImgCube />
        <Fade right>

        <div className="skill-cards">
            {skillCardData.map(createSkillCard)}
        </div>
        </Fade>
        </div>
    )
}

export default Skills;