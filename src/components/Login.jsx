import React, {useState} from "react";

import loginImg from "../assets/images/login_API-07.png";
import Image from "./Image";
import EmailInput from "./EmailInput";
import closedEyeImg from "../assets/images/closed_eye.svg";
import openedEyeImg from "../assets/images/opened_eye.svg";


function Login() {
    // Объект с пользовательскими данными
    const [inputInfo, setInputInfo] = useState({
        username: "",
        password: ""
    });

    const closed_eye = <img className="input-icon-eye_img" src={closedEyeImg} alt="eye"></img>;
    const opened_eye = <img className="input-icon-eye_img" src={openedEyeImg} alt="eye"></img>;
    const [passwordShown, setPasswordShown] = useState(false);
    function togglePasswordVisiblity() {
      setPasswordShown(!passwordShown);
    };
    
    function handleInput(event) {
        const {name, value} = event.target;
        setInputInfo((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    return <main className="">
        <Image img={loginImg} style={"decorative_image"}/>
        <div className="page-content">
            <p className="page-content-p">Портал разработчика API</p>
            <h1 className="page-content-h1">Войти в аккаунт</h1>
            <EmailInput 
                emailHandle={handleInput}
                currentValue={inputInfo.username}
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
                <i className="input-icon" onClick={togglePasswordVisiblity}>{passwordShown ? closed_eye : opened_eye}</i>
            </div>
            <div className="page-content-actions">
                <button className="page-content-button page-content-button-blue login-button-blue" type="submit">Войти</button>
                <a href="/password-reset"><button className="page-content-button page-content-button-transparent">Восстановить пароль</button></a>
            </div>
            <a className="page-content-link" href="/registration">Создать аккаунт</a>
        </div>
    </main>
}

export default Login;