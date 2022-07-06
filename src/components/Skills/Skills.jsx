import React from "react";
import ImgCube from "./ImgCube";
import skillCardData from "./skillCardData";
import SkillCard from "./SkillCard";
import {Container, Row, Col} from "react-bootstrap";
import "./Skills.css"

function createSkillCard(info){
    return <SkillCard front={info.front} back={info.back}n />
}

function Skills(){
    return (
        <div className="skills">
        <h1 className="skill-title">My Skills</h1>
        <ImgCube />
        <div className="skill-cards">
            {skillCardData.map(createSkillCard)}
        </div>
        </div>
    )
}

export default Skills;