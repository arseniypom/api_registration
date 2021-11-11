import React from "react";

import correctImg from "../assets/images/Correct.svg";
import errorImg from "../assets/images/Error.svg";
import arrowImg from "../assets/images/Arrow.svg";

function SinglePasswordRequirement(props) {
    let imgSource;
    if (props.status !== null) {
        if (props.status) {
            imgSource = correctImg
        } else {
            imgSource = errorImg
        }
    } else {
        imgSource = arrowImg
    }
    return (
        <div className="pass_requirements-content-condition">
            <img className="pass_requirements-content-condition-img" src={imgSource} alt="status"></img>
            <p className={`pass_requirements-content-condition-p page-content-muted ${props.addClass ? props.addClass : ""}`}>{props.text}</p>
        </div>
    )
}

export default SinglePasswordRequirement;