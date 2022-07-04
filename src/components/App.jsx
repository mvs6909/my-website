import React from "react";
import NavBar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import About from "./About/About";
import Particle from "./Particles/Particle";
import Projects from "./Projects/Projects";
import "./App.css";

function App(){
    return ( 
    <div className="App">
        <NavBar />
        <Particle className="animation-background"/>
        <Home />
        <About />
        <Projects />
        <Skills />
    </div>
    )
}

export default App;