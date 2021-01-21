import React, { useState } from "react";
import SinglePasswordRequirement from "./SinglePasswordRequirement";

function PasswordRequirements(props) {

    return <div className="pass_requirements-content">
        <p className="pass_requirements-content-p">Требования к паролю</p>
        <SinglePasswordRequirement status={props.symbolsCheck} text="Минимальное число типов символов пароля: 3 типа"/>
        <SinglePasswordRequirement status={props.lengthCheck} text="Минимальная длина пароля: 8 символов"/>
        <SinglePasswordRequirement status={props.usernameInPasswordCheck} text="Пароль не должен содержать имя пользователя"/>
        <SinglePasswordRequirement status={props.passwordSafetyCheck >= 5} text={"Минимальная оценка надежности пароля: " + props.passwordSafetyCheck}/>
        <SinglePasswordRequirement status={props.sameSymbolsCheck} text="Максимальное количество одинаковых символов подряд: 3 символа"/>
    </div>
}

export default PasswordRequirements;