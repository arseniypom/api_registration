import React, { useState } from "react";
import PasswordsSet from "./PasswordsSet";
import PasswordRequirements from "./PasswordRequirements";


function Registration() {
    // Объект с пользовательскими данными
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        repeatPassword: "",
        termsOfUse: false,
        organizationRegulations: false
    });


    // Результаты валидации, происходящей в компоненте PasswordsSet
    const [isSymbolTypes, setSymbolTypes] = useState(null);
    const [isLengthCorrect, setLengthCorrect] = useState(null);
    const [isPasswordContainUsername, setPasswordContainUsername] = useState(null);
    const [passwordSafety, setPasswordSafety] = useState(0);
    const [isSameSymbolsSequence, setSameSymbolsSequence] = useState(null);

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

    function handleUserInfoInput(event) {
        const {name, value} = event.target;
        if (name === "username") {
            emailValidation(value);
        }
        setUserInfo((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function handlePasswordInput(data) {
        setUserInfo((prevValue) => {
            return {
                ...prevValue,
                password: data.password,
                repeatPassword: data.repeatPassword
            }
        });
    }

    function passwordValidation(symbolTypesResult, lengthCorrectResult, passwordContainUsernameResult, passwordSafetyResult, sameSymbolsSequenceResult) {
        setSymbolTypes(symbolTypesResult);
        setLengthCorrect(lengthCorrectResult);
        setPasswordContainUsername(passwordContainUsernameResult);
        setPasswordSafety(passwordSafetyResult);
        setSameSymbolsSequence(sameSymbolsSequenceResult);
    }

    return <div className="body">
        <div className="registration-content">
            <p className="page-content-p">API Developer Portal</p>
            <h1 className="page-content-h1">Регистрация</h1>
            <div className="registration-input-wrapper" >
                <label className="input-label" htmlFor="username">Адрес электронной почты</label>
                <input
                    onChange={handleUserInfoInput}
                    value={userInfo.username}
                    type="email"
                    name="username"
                    id="username"
                    className={inputStyle}
                    placeholder="Введите адрес электронной почты"
                    autoFocus
                />
            </div>

            <PasswordsSet 
                username={userInfo.username}
                savePassword={handlePasswordInput}
                validation={passwordValidation}
            />

            <div className="conditions_accept-wrapper conditions_accept-wrapper-first">
                <input
                    className="conditions_accept-wrapper-custom_checkbox"
                    type="checkbox"
                    id="termsOfUse"
                    name="termsOfUse"
                    onChange={handleUserInfoInput}
                />
                {/* Необходимо добавить аттрибут href ссылке ниже */}
                <label className="conditions_accept-wrapper-label" htmlFor="termsOfUse">Принимаю <a className="" href="">пользовательское соглашение</a></label>
            </div>
            <div className="conditions_accept-wrapper conditions_accept-wrapper-second">
                <input
                    className="conditions_accept-wrapper-custom_checkbox"
                    type="checkbox"
                    id="organizationRegulations"
                    name="organizationRegulations"
                    onChange={handleUserInfoInput} 
                />
                {/* Необходимо добавить аттрибут href ссылке ниже */}
                <label className="conditions_accept-wrapper-label" htmlFor="organizationRegulations">Принимаю <a className="" href="">правила Положения об организации обработки персональных данных в Банке ВТБ (ПАО)</a></label>
            </div>

            <div className="page-content-actions">
                <button className="page-content-button page-content-button-blue registration-button-blue" type="submit">Регистрация</button>
                <div className="page-content-actions-login">
                    <p>Уже есть аккаунт?</p>
                    <a className="page-content-link" href="/">Войти</a>
                </div>
            </div>
        </div>
        <PasswordRequirements
            symbolsCheck={isSymbolTypes}
            lengthCheck={isLengthCorrect}
            usernameInPasswordCheck={isPasswordContainUsername}
            passwordSafetyCheck={passwordSafety}
            sameSymbolsCheck={isSameSymbolsSequence}  
        />
    </div>
}

export default Registration;