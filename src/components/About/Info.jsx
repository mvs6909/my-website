import React from "react";
import "./About.css";

function Info(props){
    return (
        <div>
            <h3 className="info-title">{props.title}</h3>
            <p className="info-data">{props.data}</p>
            <hr />
        </div>
    )
}

export default Info;