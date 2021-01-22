import React, {useState} from "react";
import Image from "./Image";



function Congratulations() {

    return <div className="body">
        <div className="congratulations-content">
            <p className="page-content-p">API Developer Portal</p>
            <h1 className="page-content-h1">Поздравляем</h1>
            <p className="congratulations-content-p">Вы успешно зарегистрировались на портале API</p>
            <div className="page-content-actions">
                <button className="page-content-button page-content-button-blue login-button-blue" type="submit">Войти</button>
            </div>
        </div>
        <Image style={"congratulations-decorative_image"}/>
    </div>
}

export default Congratulations;