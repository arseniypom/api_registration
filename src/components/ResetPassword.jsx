import React, {useState} from "react";
import Image from "./Image";


function ResetPassword() {
    const [email, setEmail] = useState("");
    const [inputStyle, setInputStyle] = useState("page-content-input");
    function emailValidation(emailAddress) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(emailAddress)) {
            setInputStyle("page-content-input page-content-input-success");
            return emailAddress;
        } else {
            setInputStyle("page-content-input page-content-input-error");
            return emailAddress;
        }
    }
    function handleInput(event) {
        const userEmail = event.target.value;
        setEmail(emailValidation(userEmail));
    }

    return <div className="body">
        <Image img="images/login_API-08.png" style="decorative_image"/>
        <div className="page-content">
            <p className="page-content-p">API Developer Portal</p>
            <h1 className="page-content-h1">Сброс пароля</h1>
            <p className="page-content-p page-content-description">Если вы забыли пароль от своей учётной записи или пароль пользователя, отправьте запрос на сброс пароля</p>
            <input onChange={handleInput} type="email" name="username" className={inputStyle} placeholder="Введите логин" autoFocus value={email}></input>
            <p className="page-content-p page-content-muted reset_pass-instructions">Инструкции по сбросу пароля будут отправлены на ваш зарегистрированный адрес электронной почты</p>
            <div className="page-content-actions">
                <button className="page-content-button page-content-button-blue reset_pass-button-blue" type="submit">Отправить</button>
                <a className="page-content-link" href="/">Вернуться к форме входа в систему</a>
            </div>
        </div>
    </div>
}

export default ResetPassword;