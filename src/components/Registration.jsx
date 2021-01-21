import React, { useState } from "react";
import PasswordsSet from "./PasswordsSet";
import PasswordRequirements from "./PasswordRequirements";


function Registration() {
    // Объект с пользовательскими данными
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        repeatPassword: ""
    });

    // Результаты валидации
    const [isSymbolTypes, setSymbolTypes] = useState(null);
    const [isLengthCorrect, setLengthCorrect] = useState(null);
    const [isPasswordContainUsername, setPasswordContainUsername] = useState(null);
    const [passwordSafety, setPasswordSafety] = useState(0);
    const [isSameSymbolsSequence, setSameSymbolsSequence] = useState(null);

    function handleUsernameInput(event) {
        const {value} = event.target;
        setUserInfo((prevValue) => {
            return {
                ...prevValue,
                username: value
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
                <input onChange={handleUsernameInput} value={userInfo.username} type="email" name="username" id="username" className="page-content-input" placeholder="Введите адрес электронной почты" autoFocus></input>
            </div>

            <PasswordsSet 
                username={userInfo.username}
                savePassword={handlePasswordInput}
                validation={passwordValidation}
            />

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