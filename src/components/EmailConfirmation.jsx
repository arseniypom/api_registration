import React, {useState} from "react";
import TextInput from "./TextInput";

import confirmationImg from "../assets/images/login_API-09.png";

import Image from "./Image";



function Confirmation() {
    // Объект с пользовательскими данными
    const username = "Konstantin.Sorokin.1981@yandex.ru";
    const [confirmationCode, setConfirmationCode] = useState("");

    function handleCodeInput(event) {
        const {value} = event.target;
        setConfirmationCode(value);
    }

    return <main className="">
        
        <Image img={confirmationImg} style={"decorative_image"}/>
        <div className="confirmation-content">
            <p className="page-content-p">API Developer Portal</p>
            <h1 className="page-content-h1">Подтверждение email</h1>
            <p className="confirmation-content-p">Мы отправили Вам код подтверждения на почту</p>
            <p className="confirmation-content-username">{username},</p>
            <p className="confirmation-content-p">введите его в поле ниже для подтверждения email</p>
            <div className="confirmation-content-input-wrapper" >
                <label className="input-label" htmlFor="code">Код, отправленный на email</label>
                <TextInput
                    name="code"
                    placeholder="Введите код подтверждения"
                    currentValue={confirmationCode}
                    handleInput={handleCodeInput}
                />
            </div>
            <div className="page-content-actions">
                <button className="page-content-button page-content-button-blue confirmation-content-button-blue" type="submit">Подтвердить</button>
                <a className="page-content-link" href="/">Отменить и вернуться к форме входа в систему</a>
            </div>
        </div>
    </main>
}

export default Confirmation;