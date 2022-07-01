import React, { useState } from "react";
import menuItems from "./Menuitems";
import "./Navbar.css"



function Navbar(){
    const[clicked, setClick] = useState(false)

    function hanleClick(){
        setClick(!clicked);
    }
    return ( 
        <nav className="NavbarItems">
            <h1 className="navbar-logo">
                manav<img src={require("./assets/memoji.jpg")} class="memoji"></img>
            </h1>
            <div className="menu-icon" onClick={hanleClick}>
                <i className={clicked? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked? "nav-menu active" : "nav-menu"}>
                {menuItems.map((item, index) => {
                    return (
                    <l1 key={index}>
                        <a className={item.cName} href={item.url}>
                        {item.title}
                        </a>
                    </l1>
                    )
                    })}
            </ul>
        </nav>
    )
}


export default Navbar;