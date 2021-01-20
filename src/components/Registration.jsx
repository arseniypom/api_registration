import React, { useState } from "react";
import PasswordRequirements from "./PasswordRequirements";


function Registration() {
    const [inputInfo, setInputInfo] = useState({
        username: "",
        password: "",
        repeat_password: ""
    })

    const [isPassEqual, setPassEqual] = useState(true)

    function handleInput(event) {
        const {name, value} = event.target;
        setInputInfo((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    function handleInputAndCheckEquality(event) {
        const {name, value} = event.target;
        if (name === "password") {
            setPassEqual(value === inputInfo.repeat_password)
        } else if (name === "repeat_password") {
            setPassEqual(inputInfo.password === value)
        }
        setInputInfo((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    return <div className="body">
        <div className="registration-content">
            <p className="page-content-p">API Developer Portal</p>
            <h1 className="page-content-h1">Регистрация</h1>
            <div className="registration-input-wrapper" >
                <label className="input-label" htmlFor="username">Адрес электронной почты</label>
                <input onChange={handleInput} value={inputInfo.username} type="email" name="username" id="username" className="page-content-input" placeholder="Введите адрес электронной почты" autoFocus></input>
            </div>
            <div className="registration-input-wrapper">
                <label className="input-label" htmlFor="password">Пароль</label>
                <input onChange={handleInput} value={inputInfo.password} type="password" name="password" id="password" className="page-content-input" placeholder="Придумайте пароль"></input>
            </div>
            <div className="registration-input-wrapper">
                <label className="input-label" htmlFor="repeat_password">Подтверждение пароля</label>
                <input onChange={handleInputAndCheckEquality} value={inputInfo.repeat_password} type="password" name="repeat_password" id="repeat_password" className="page-content-input" placeholder="Повторите пароль"></input>
            </div>
            {!isPassEqual && <p className="registration-password-warning">Пароли не совпадают</p>}
            <div className="conditions_accept-wrapper conditions_accept-wrapper-first">
                <input className="conditions_accept-wrapper-custom_checkbox" type="checkbox" id="terms_of_use" name="terms_of_use"/>
                {/* Необходимо добавить аттрибут href ссылке ниже */}
                <label className="conditions_accept-wrapper-label" htmlFor="terms_of_use">Принимаю <a className="" href="">пользовательское соглашение</a></label>
            </div>
            <div className="conditions_accept-wrapper conditions_accept-wrapper-second">
                <input className="conditions_accept-wrapper-custom_checkbox" type="checkbox" id="organization_regulations" name="organization_regulations" />
                {/* Необходимо добавить аттрибут href ссылке ниже */}
                <label className="conditions_accept-wrapper-label" htmlFor="organization_regulations">Принимаю <a className="" href="">правила Положения об организации обработки персональных данных в Банке ВТБ (ПАО)</a></label>
            </div>
            <div className="page-content-actions">
                <button className="page-content-button page-content-button-blue registration-button-blue" type="submit">Регистрация</button>
                <div className="page-content-actions-login">
                    <p>Уже есть аккаунт?</p>
                    <a className="page-content-link" href="/">Войти</a>
                </div>
            </div>
        </div>
        <PasswordRequirements />
    </div>
}

export default Registration;