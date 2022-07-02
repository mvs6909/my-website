import React from "react";
import "./ImgCube.css";

function ImgCube(){
    return (
            <div class="wrap">
                <div class="cube">
                    <img src={require("../assets/python.jpg")} />
                    <img src={require("../assets/js.jpg")} />
                    <img src={require("../assets/js.jpg")} />
                    <img src={require("../assets/swift.jpg")} />
                </div>
            </div>
    )
}

export default ImgCube;