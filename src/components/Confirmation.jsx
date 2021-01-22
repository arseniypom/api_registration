import React, {useState} from "react";
import Image from "./Image";



function Confirmation() {
    // Объект с пользовательскими данными
    const username = "Konstantin.Sorokin.1981@yandex.ru";
    const targetAction = "сброса пароля";

    return <div className="body">
        <Image />
        <div className="confirmation-content">
            <p className="page-content-p">API Developer Portal</p>
            <h1 className="page-content-h1">Подтверждение</h1>
            <p className="confirmation-content-p">Мы отправили вам ссылку на почту</p>
            <p className="confirmation-content-username">{username},</p>
            <p className="confirmation-content-p">перейдите по ней для {targetAction}</p>
        </div>
    </div>
}

export default Confirmation;