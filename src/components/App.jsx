import React from "react";
import NavBar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import "./App.css";

function App(){
    return ( 
    <div className="App">
        <NavBar />
        <Home />
        <Skills />
    </div>
    )
}

export default App;