import React, { useState } from "react";

import PasswordsSet from "./PasswordsSet";
import PasswordRequirements from "./PasswordRequirements";
import EmailInput from "./EmailInput";
import pdnDocument from "../assets/documents/obrabotkа_pdn_banka_vtb_pao.pdf"


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

    function handleCheckboxInput(event) {
        const {name} = event.target;
        setUserInfo((prevValue) => {
            return {
                ...prevValue,
                [name]: !userInfo[name]
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
                <EmailInput 
                    emailHandle={handleUsernameInput}
                    currentValue={userInfo.username}
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
                    onChange={handleCheckboxInput}
                />
                {/* Необходимо добавить аттрибут href ссылке ниже */}
                <label className="conditions_accept-wrapper-label" htmlFor="termsOfUse"><p className="conditions_accept-wrapper-p">Принимаю <a className="" href="">пользовательское соглашение</a></p></label>
            </div>
            <div className="conditions_accept-wrapper conditions_accept-wrapper-second">
                <input
                    className="conditions_accept-wrapper-custom_checkbox"
                    type="checkbox"
                    id="organizationRegulations"
                    name="organizationRegulations"
                    onChange={handleCheckboxInput}
                />
                <label className="conditions_accept-wrapper-label" htmlFor="organizationRegulations"><p className="conditions_accept-wrapper-p">Принимаю <a className="" href={pdnDocument} download="obrabotkа_pdn_banka_vtb_pao">правила Положения об организации обработки персональных данных в Банке ВТБ (ПАО)</a></p></label>
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