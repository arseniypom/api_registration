import React from "react";

function SinglePasswordRequirement(props) {
    let imgSource;
    if (props.status !== null) {
        if (props.status) {
            imgSource="images/Correct.png"
        } else {
            imgSource="images/Error.png"
        }
    } else {
        imgSource="images/Arrow.png"
    }
    return <div className="pass_requirements-content-condition">
    <img className="pass_requirements-content-condition-img" src={imgSource} alt="status"></img>
    <p className="pass_requirements-content-condition-p page-content-muted">{props.text}</p>
</div>
}

export default SinglePasswordRequirement;