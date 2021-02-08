import React, {useState} from "react";
import ClassNames from "classnames";

function EmailInput(props) {

    // Валидация адреса электронной почты
    const [isEmailCorrecrt, setEmailCorrecrt] = useState(true);
    function emailValidation(emailAddress) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(emailAddress)) {
            setEmailCorrecrt(true);
        } else {
            setEmailCorrecrt(false);   
        }
    }

    function handleInput(event) {
        const {value} = event.target;
        emailValidation(value);
        props.emailHandle(event);
    }

    return (
        <input
            type="email"
            name="username"
            className={ClassNames("page-content-input", {"page-content-input-error" : !isEmailCorrecrt})}
            placeholder="Введите логин"
            autoFocus
            value={props.currentValue}
            onChange={handleInput}
        />
    )
}

export default EmailInput;
