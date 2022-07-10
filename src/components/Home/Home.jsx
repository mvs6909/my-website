import React from "react";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import "./Home.css";


function Home(){
    return (
    <div className="title">
        <Zoom right cascade>

            <h1 className="main-heading">Hi there, I am Manav</h1>
        </Zoom>
        <Fade delay={1000}>

        <h2>A developer.</h2>
        </Fade>
    </div>
    )
}

export default Home;

