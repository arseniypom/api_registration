import React from "react";

import SinglePasswordRequirement from "./SinglePasswordRequirement";

function PasswordRequirements(props) {

    const [passwordSafety, setPasswordSafety] = React.useState(0)

    React.useEffect(() => {
        setPasswordSafety(Number(props.symbolsCheck) + Number(props.lengthCheck) + Number(props.usernameInPasswordCheck) + Number(props.sameSymbolsCheck))
    })

    function checkPasswordSafety(number) {
        if (number === 0) {
            return null
        } else if (number > 0 && number < 3) {
            return false
        } else {
            return true
        }
    }

    
    
    return <div className="pass_requirements-content">
        <p className="pass_requirements-content-p">Требования к паролю</p>
        <SinglePasswordRequirement status={props.symbolsCheck} text="Минимальное число типов символов пароля: 3 типа"/>
        <SinglePasswordRequirement status={props.lengthCheck} text="Минимальная длина пароля: 8 символов"/>
        <SinglePasswordRequirement status={props.usernameInPasswordCheck} text="Пароль не должен содержать имя пользователя"/>
        <SinglePasswordRequirement status={checkPasswordSafety(passwordSafety)} text={"Минимальная оценка надежности пароля: " + passwordSafety}/>
        <SinglePasswordRequirement status={props.sameSymbolsCheck} text="Максимальное количество одинаковых символов подряд: 3 символа"/>
    </div>
}

export default PasswordRequirements;