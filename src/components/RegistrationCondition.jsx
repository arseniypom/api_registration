import React from "react";

function RegistrationCondition(props) {
    let imgSource;
    if (props.status !== null) {

    } else {
        imgSource="images/Arrow.png"
    }
    return <div className="pass_requirements-content-condition">
    <img className="pass_requirements-content-condition-img" src={imgSource} alt="status"></img>
    <p className="pass_requirements-content-condition-p page-content-muted">{props.text}</p>
</div>
}

export default RegistrationCondition;