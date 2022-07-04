import React from "react";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import "./Home.css";


function Home(){
    return (
    <div className="title">
        {/* <Fade top big cascade> */}
        <Zoom right cascade>

            <h1 className="main-heading">Hi there, I am Manav</h1>
        {/* </Fade> */}
        </Zoom>
        <h2>A developer.</h2>
    </div>
    )
}

export default Home;

