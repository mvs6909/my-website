import React, { useState } from "react";
import menuItems from "./Menuitems";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css"



function Navbar(){
    const[clicked, setClick] = useState(false)

    function hanleClick(){
        setClick(!clicked);
    }
    return ( 
        <BrowserRouter>

        <nav className="NavbarItems">
            <h1 className="navbar-logo">
                manav<img src={require("../../assets/memoji.jpg")} class="memoji"></img>
            </h1>
            <div className="menu-icon" onClick={hanleClick}>
                <i className={clicked? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked? "nav-menu active" : "nav-menu"}>
                {menuItems.map((item, index) => {
                    return (
                    <l1 key={index}>
                        <Link to={item.url} className="link-to">
                        <a href={item.link} target={item.target} className="nav-links">
                        {item.title}
                        </a>
                        </Link>
                    </l1>
                    )
                    })}
                <li>
                    <a className="nav-links" href="https://drive.google.com/file/d/1-lZK0B5zeBnMcozg7DwSjIozMQz0SPiW/view?usp=sharing"
                        target="_blank">
                            Resume
                        </a>

                </li>
            </ul>
        </nav>
        </BrowserRouter>
    )
}


export default Navbar;