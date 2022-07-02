import React from "react";
import ImgCube from "./ImgCube";
import {Container, Row, Col} from "react-bootstrap";
import "./Skills.css"

function Skills(){
    return (
        <div className="skills">
        <Container>
            <Row>
                <Col>
                        <h3>My skills</h3>
                        <ul className="list">
                            <li>
                                Python
                            </li>
                            <li>
                                Python
                            </li>
                            <li>
                                Python
                            </li>
                        </ul>
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