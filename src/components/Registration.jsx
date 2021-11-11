import React, { useState, useEffect } from "react";

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
        organization: "",
        password: "",
        repeatPassword: "",
        termsOfUse: false,
        organizationRegulations: false
    });

    const [isButtonEnabled, setButtonEnabled] = useState(false)

    useEffect(() => {
        for (let item in userInfo) {
            if (!Boolean(userInfo[item])) {
                setButtonEnabled(false)
                return
            }
        }
        setButtonEnabled(true)
    })

    // Результаты валидации, происходящей в компоненте PasswordsSet
    const [isSymbolTypes, setSymbolTypes] = useState(null);
    const [isLengthCorrect, setLengthCorrect] = useState(null);
    const [isPasswordContainUsername, setPasswordContainUsername] = useState(null);
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

    return <main className="body">
        <div className="registration-content">
            <p className="page-content-p">Портал разработчика API</p>
            <h1 className="page-content-h1">Регистрация</h1>
            <div className="registration-input-wrapper" >
                <label className="input-label" htmlFor="username">Адрес электронной почты (логин)</label>
                <EmailInput 
                    emailHandle={handleUserInput}
                    currentValue={userInfo.username}
                    autofocus
                />
            </div>
            <div className="registration-input-wrapper" >
                <label className="input-label" htmlFor="name">Имя</label>
                <TextInput
                    name="name"
                    placeholder="Введите имя"
                    currentValue={userInfo.name}
                    handleInput={handleUserInput}
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
                <label className="input-label" htmlFor="organization">Название организации</label>
                <TextInput
                    name="organization"
                    placeholder="Введите название организации"
                    currentValue={userInfo.organization}
                    handleInput={handleUserInput}
                />
            </div>

            <PasswordsSet 
                username={userInfo.username}
                savePassword={handlePasswordInput}
                setSymbolTypes={setSymbolTypes}
                setLengthCorrect={setLengthCorrect}
                setPasswordContainUsername={setPasswordContainUsername}
                setSameSymbolsSequence={setSameSymbolsSequence} 
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
                <button disabled={!isButtonEnabled} className="page-content-button page-content-button-blue registration-button-blue" type="submit">Регистрация</button>
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
            sameSymbolsCheck={isSameSymbolsSequence}  
        />
    </main>
}

export default Registration;