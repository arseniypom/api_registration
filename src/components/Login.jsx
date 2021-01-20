import React from "react";
import Image from "./Image";


function Login() {
    return <div className="body">
        <Image />
        <div className="page-content">
            <p className="page-content-p">API Developer Portal</p>
            <h1 className="page-content-h1">Войти в аккаунт</h1>
            <input type="email" name="username" className="page-content-input" placeholder="Введите логин" autoFocus></input>
            <div className="login-password-wrapper">
                <input type="password" name="password" className="page-content-input" placeholder="Введите пароль"></input>
                {/* <img src="" alt=""></img> */}
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