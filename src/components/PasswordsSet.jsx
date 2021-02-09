import React, {useState} from "react";

import closedEyeImg from "../assets/images/closed_eye.svg";
import openedEyeImg from "../assets/images/opened_eye.svg";


function PasswordsSet(props) {
    const [passwords, setPasswords] = useState({
        password: "",
        repeatPassword: ""
    });

    const closed_eye = <img className="input-icon-eye_img" src={closedEyeImg} alt="eye"></img>;
    const opened_eye = <img className="input-icon-eye_img" src={openedEyeImg} alt="eye"></img>;
    const [passwordShown, setPasswordShown] = useState(false);
    function togglePasswordVisiblity() {
      setPasswordShown(!passwordShown);
    };

    const [isPassEqual, setPassEqual] = useState(true);
    const [passwordSafety, setPasswordSafety] = useState(0);
    

    // Обработка ввода (сохранение в переменную passwords) и проверка соответствия всем требованиям сложности
    function handleInput(event) {
        const {name, value} = event.target;
        setPasswordSafety(0);
        if (name === "password" && value.length > 0) {
            props.validation(checkSymbolTypes(value), checkLength(value), checkUsernameInPassword(value), passwordSafety, checkSameSymbolsSequence(value.split("")));
        } else if (name === "password" && value.length === 0) {
            props.validation(null, null, null, 0, null);
        }
        setPasswords((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
        props.savePassword(passwords);
    }
    // Обработка ввода (сохранение в переменную passwords) и проверка на совпадение паролей
    function handleInputAndCheckEquality(event) {
        const {name, value} = event.target;
        if (name === "password") {
            setPassEqual(value === passwords.repeatPassword)
        } else if (name === "repeatPassword") {
            setPassEqual(passwords.password === value)
        }
        setPasswords((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
        props.savePassword(passwords);
    }
    // Проверка наличия цифр в вводе
    function hasNumber(password) {
        return /\d/.test(password);
    }
    // Проверка наличия нижнего регистра в вводе
    function hasLowerCase(password) {
        return password.toUpperCase() !== password;
    }
    // Проверка наличия верхнего регистра в вводе
    function hasUpperCase(password) {
        return password.toLowerCase() !== password;
    }

    // Проверка содержит ли пароль 3 типа символов
    function checkSymbolTypes(password) {
        const result = (hasNumber(password) && hasLowerCase(password) && hasUpperCase(password));
        result && setPasswordSafety((prevValue) => (prevValue+=2));
        return result;
    }
    // Проверка длины пароля
    function checkLength(password) {
        const result = password.length > 7;
        result && setPasswordSafety((prevValue) => (prevValue+=3));
        return result;
    }
    // Проверка не содержит ли пароль имя пользователя
    function checkUsernameInPassword(password) {
        const result = (password.indexOf(props.username) === -1);
        result && setPasswordSafety((prevValue) => (prevValue+=1));
        return result;
    }

    // Проверка максимального количества одинаковых символов подряд
    const checkSameSymbolsSequence = (arr = []) => {
        const res = arr.reduce((acc,val,ind) => {
           if(acc.length && acc[acc.length-1][0] === val){
              acc[acc.length-1].push(val);
           }else{
              acc.push([val]);
           };
           return acc;
        },[]).reduce((acc, val) => {
           return val.length > acc.length ? val : acc;
        });
        const result = res.length <= 3;
        result && setPasswordSafety((prevValue) => (prevValue+=1));
        return result;
    }

    return <div>
            <div className="password-input-wrapper">
                <label className="input-label" htmlFor="password">Пароль</label>
                <input
                    onChange={handleInput}
                    value={passwords.password}
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    id="password"
                    className="page-content-input"
                    placeholder="Придумайте пароль"
                />
                <i className="input-icon" onClick={togglePasswordVisiblity}>{passwordShown ? closed_eye : opened_eye}</i>
            </div>
            <div className="password-input-wrapper">
                <label className="input-label" htmlFor="repeatPassword">Подтверждение пароля</label>
                <input
                    onChange={handleInputAndCheckEquality}
                    value={passwords.repeatPassword}
                    type={passwordShown ? "text" : "password"}
                    name="repeatPassword"
                    id="repeatPassword"
                    className="page-content-input"
                    placeholder="Повторите пароль"
                />
                <i className="input-icon" onClick={togglePasswordVisiblity}>{passwordShown ? closed_eye : opened_eye}</i>
            </div>
            {/* Предупреждение в случае несоответствия паролей */}
            {!isPassEqual && <p className="password-warning">Пароли не совпадают</p>}
    </div>
}

export default PasswordsSet;