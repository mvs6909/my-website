import React from "react";
import ImgCube from "./ImgCube";
import {Container, Row, Col} from "react-bootstrap";
import "./Skills.css"

function Skills(){
    return (
        <div className="skills">
        <h1 className="skill-title">My Skills</h1>
        <Container>
            <Row>
                <Col>
                </Col>
                <Col>
                    <ImgCube />
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Skills;