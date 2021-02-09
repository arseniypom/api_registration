import React from "react";

import correctImg from "../assets/images/Correct.png";
import errorImg from "../assets/images/Error.png";
import arrowImg from "../assets/images/Arrow.png";

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
    return <div className="pass_requirements-content-condition">
    <img className="pass_requirements-content-condition-img" src={imgSource} alt="status"></img>
    <p className="pass_requirements-content-condition-p page-content-muted">{props.text}</p>
</div>
}

export default SinglePasswordRequirement;