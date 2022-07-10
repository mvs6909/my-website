import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import Info from "./Info";
import infoData from "./infoData";
import { Container, Row, Col} from "react-bootstrap";
import { Rotate } from "react-reveal";

function creatInfo(inform){
    return (
        <Info title={inform.title} data={inform.data} />
    )
}

function About() {
    return (
        <div className="about" id="about">
            <div className="page">
                <Zoom delay={200}>
                    <h1 className="about-title">About me</h1>
                </Zoom>
                <Container className="container">
                    <Row className="row">
                        <Col lg={7} md={7} sm={1}>
                            <Fade left delay={500}>
                            <p className="info-data">
                            Welcome to my world. I am a 19 year old passionate about software development trying to make an impact. Being introduced to coding from an early age developed my interest in solving problems using code. I was thrilled by coding while making programs that assisted me with my tedious homework. Being interested in making solutions using code, I decided to pursue Computer Science in college.
                            </p>
                            </Fade>
                        </Col>
                        <Col lg={5} md={5} sm={0}>
                            <Fade right delay={250}>
                            <img src={require("../../assets/me.jpg")} className="me-img"></img>
                            </Fade>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5} md={5} sm={1}>
                            <Fade left delay={500}>

                            <img src={require("../../assets/oldmain.jpg")} className="oldmain-img"></img>
                            </Fade>
                        </Col>
                        <Col lg={7} md={7} sm={1}>
                            <Fade right delay={500}>

                            <p className="info-data">
                            I am a rising junior at The Pennsylvania State University majoring in Computer Science and minoring in Economics and Math graduating in May 2024. Losing my freshman year’s in-person experience to the pandemic, I was forced to take online classes from India with different timezones. I was optimistic for my sophomore year where I could seize all opportunities to hone my technical skills as well as have the “college experience” everyone talks about.
                            </p>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
                <Rotate bottom right>

                <p className="goal-title">My Goal</p>
                </Rotate>
                <Zoom>

                <p className="goal-data">I want to enhance my software development skills gaining real-world experience. I am currently seeking a Computer Science Internship for summer 2023.</p>
                </Zoom>
            </div>
        </div>
    )
}

export default About;