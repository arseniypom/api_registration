import React, {useState} from "react";

import resetPassImg from "../assets/images/login_API-08.png";

import Image from "./Image";
import EmailInput from "./EmailInput";


function ResetPassword() {
    const [email, setEmail] = useState("");

    function handleInput(event) {
        const {value} = event.target;
        setEmail(value);
    }

    return <main className="body">
        <Image img={resetPassImg} style={"decorative_image"}/>
        <div className="page-content">
            <p className="page-content-p">Портал разработчика API</p>
            <h1 className="page-content-h1">Сброс пароля</h1>
            <p className="page-content-p page-content-description">Если вы хотите изменить или восстановить пароль от своей учетной записи, отправьте запрос на зарегистрированный адрес электронной почты и перейдите по ссылке из письма для обновления пароля.</p>
            <EmailInput 
                emailHandle={handleInput}
                currentValue={email}
            />
            {/* <p className="page-content-p page-content-muted reset_pass-instructions">Инструкции по сбросу пароля будут отправлены на ваш зарегистрированный адрес электронной почты</p> */}
            <div className="page-content-actions">
                <button className="page-content-button page-content-button-blue reset_pass-button-blue" type="submit">Отправить</button>
                <a href="/" className="page-content-button page-content-button-transparent">Отмена</a>
                {/* <a className="page-content-link" href="/">Вернуться к форме входа в систему</a> */}
            </div>
        </div>
    </main>
}

export default ResetPassword;