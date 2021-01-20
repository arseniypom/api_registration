import React from "react";
import RegistrationCondition from "./RegistrationCondition";

function PasswordRequirements(props) {
    return <div className="pass_requirements-content">
        <p className="pass_requirements-content-p">Требования к паролю</p>
        <RegistrationCondition status={null} text="Минимальное число типов символов пароля: 3 типа"/>
        <RegistrationCondition status={null} text="Минимальная длина пароля: 8 символов"/>
        <RegistrationCondition status={null} text="Пароль не должен содержать имя пользователя"/>
        <RegistrationCondition status={null} text="Минимальная оценка надежности пароля: 2"/>
        <RegistrationCondition status={null} text="Максимальное количество одинаковых символов подряд: 3 символа"/>
    </div>
}

export default PasswordRequirements;