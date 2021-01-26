import React, { useState } from "react";
import PasswordsSet from "./PasswordsSet";
import PasswordRequirements from "./PasswordRequirements";

function RestorePassword() {
    const [userInfo, setUserInfo] = useState({
        username: "username",
        password: "",
        repeatPassword: ""
    });

    // Результаты валидации, происходящей в компоненте PasswordsSet
    const [isSymbolTypes, setSymbolTypes] = useState(null);
    const [isLengthCorrect, setLengthCorrect] = useState(null);
    const [isPasswordContainUsername, setPasswordContainUsername] = useState(null);
    const [passwordSafety, setPasswordSafety] = useState(0);
    const [isSameSymbolsSequence, setSameSymbolsSequence] = useState(null);

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
        <div className="restore_password-content">
            <p className="page-content-p">API Developer Portal</p>
            <h1 className="page-content-h1">Восстановление пароля</h1>

            <PasswordsSet 
                username={userInfo.username}
                savePassword={handlePasswordInput}
                validation={passwordValidation}
            />

            <div className="page-content-actions">
                <button className="page-content-button page-content-button-blue registration-button-blue" type="submit">Сохранить</button>
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

export default RestorePassword;