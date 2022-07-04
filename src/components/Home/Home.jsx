import React from "react";
import Zoom from 'react-reveal/Zoom';
import Particle from "../Particles/Particle";
import "./Home.css";


function Home(){
    return (
    <div className="title">
        <Zoom>
            <h1 className="main-heading">Hi there, I am Manav</h1>
        </Zoom>
        <h2>A developer.</h2>
    </div>
    )
}

export default Home;

