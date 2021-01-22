import React, {useState} from "react";
import Image from "./Image";



function Login() {
    // Объект с пользовательскими данными
    const [inputInfo, setInputInfo] = useState({
        username: "",
        password: ""
    });
    const eye = <img className="input-icon-eye_img" src="images/closed_eye.png" alt=""></img>;

    // Валидация адреса электронной почты
    const [inputStyle, setInputStyle] = useState("page-content-input");
    function emailValidation(emailAddress) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(emailAddress)) {
            setInputStyle("page-content-input page-content-input-success");
        } else {
            setInputStyle("page-content-input page-content-input-error");
        }
    }


    const [passwordShown, setPasswordShown] = useState(false);
    function togglePasswordVisiblity() {
      setPasswordShown(passwordShown ? false : true);
    };
    
    function handleInput(event) {
        const {name, value} = event.target;
        if (name === "username") {
            emailValidation(value);
        }
        setInputInfo((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    return <div className="body">
        <Image />
        <div className="page-content">
            <p className="page-content-p">API Developer Portal</p>
            <h1 className="page-content-h1">Войти в аккаунт</h1>
            <input
                type="email"
                name="username"
                className={inputStyle}
                placeholder="Введите логин"
                autoFocus
                value={inputInfo.username}
                onChange={handleInput}
            />
            <div className="login-password-wrapper">
                <input
                    name="password"
                    className="page-content-input"
                    placeholder="Введите пароль"
                    type={passwordShown ? "text" : "password"}
                    value={inputInfo.password}
                    onChange={handleInput}
                />
                <i className="input-icon" onClick={togglePasswordVisiblity}>{eye}</i>
            </div>
            <div className="page-content-actions">
                <button className="page-content-button page-content-button-blue login-button-blue" type="submit">Войти</button>
                <a href="/password-reset"><button className="page-content-button page-content-button-white">Восстановить пароль</button></a>
            </div>
            <a className="page-content-link" href="/registration">Создать аккаунт</a>
        </div>
    </div>
}

export default Login;