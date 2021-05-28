import React, { useState } from "react";

import PasswordsSet from "./PasswordsSet";
import PasswordRequirements from "./PasswordRequirements";
import EmailInput from "./EmailInput";
import TextInput from "./TextInput";
import pdnDocument from "../assets/documents/obrabotkа_pdn_banka_vtb_pao.pdf";
import agreementDocument from "../assets/documents/Оферта.pdf";


function Registration() {
    // Объект с пользовательскими данными
    const [userInfo, setUserInfo] = useState({
        name: "",
        surname: "",
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

    function handleUserInput(event) {
        const {value, name} = event.target;
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

    return <main className="">
        <div className="registration-content">
            <p className="page-content-p">API Developer Portal</p>
            <h1 className="page-content-h1">Регистрация</h1>
            <div className="registration-input-wrapper" >
                <label className="input-label" htmlFor="name">Имя</label>
                <TextInput
                    name="name"
                    placeholder="Введите имя"
                    currentValue={userInfo.name}
                    handleInput={handleUserInput}
                    autofocus
                />
            </div>
            <div className="registration-input-wrapper" >
                <label className="input-label" htmlFor="surname">Фамилия</label>
                <TextInput
                    name="surname"
                    placeholder="Введите фамилию"
                    currentValue={userInfo.surname}
                    handleInput={handleUserInput}
                />
            </div>
            <div className="registration-input-wrapper" >
                <label className="input-label" htmlFor="username">Адрес электронной почты</label>
                <EmailInput 
                    emailHandle={handleUserInput}
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
                <label className="conditions_accept-wrapper-label" htmlFor="termsOfUse"><p className="conditions_accept-wrapper-p">Принимаю <a className="" href={agreementDocument} target="_blank">пользовательское соглашение</a></p></label>
            </div>
            <div className="conditions_accept-wrapper conditions_accept-wrapper-second">
                <input
                    className="conditions_accept-wrapper-custom_checkbox"
                    type="checkbox"
                    id="organizationRegulations"
                    name="organizationRegulations"
                    onChange={handleCheckboxInput}
                />
                <label className="conditions_accept-wrapper-label" htmlFor="organizationRegulations"><p className="conditions_accept-wrapper-p">Принимаю <a className="" href={pdnDocument} target="_blank">правила Положения об организации обработки персональных данных в Банке ВТБ (ПАО)</a></p></label>
            </div>

            <div className="page-content-actions">
                <button disabled={userInfo.termsOfUse ? !userInfo.organizationRegulations : true} className="page-content-button page-content-button-blue registration-button-blue" type="submit">Регистрация</button>
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
    </main>
}

export default Registration;