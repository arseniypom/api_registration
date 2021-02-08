import React, {useState} from "react";

import Image from "./Image";
import EmailInput from "./EmailInput";


function ResetPassword() {
    const [email, setEmail] = useState("");

    function handleInput(event) {
        const {value} = event.target;
        setEmail(value);
    }

    return <div className="body">
        <Image img="images/login_API-08.png" style={"decorative_image"}/>
        <div className="page-content">
            <p className="page-content-p">API Developer Portal</p>
            <h1 className="page-content-h1">Сброс пароля</h1>
            <p className="page-content-p page-content-description">Если вы забыли пароль от своей учётной записи или пароль пользователя, отправьте запрос на сброс пароля</p>
            <EmailInput 
                emailHandle={handleInput}
                currentValue={email}
            />
            <p className="page-content-p page-content-muted reset_pass-instructions">Инструкции по сбросу пароля будут отправлены на ваш зарегистрированный адрес электронной почты</p>
            <div className="page-content-actions">
                <button className="page-content-button page-content-button-blue reset_pass-button-blue" type="submit">Отправить</button>
                <a className="page-content-link" href="/">Вернуться к форме входа в систему</a>
            </div>
        </div>
    </div>
}

export default ResetPassword;