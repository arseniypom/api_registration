import React from "react";

function Image(props) {
    return <div>
        <img src={props.img} alt="decorative" className={props.style}/>
    </div>
}

export default Image;
