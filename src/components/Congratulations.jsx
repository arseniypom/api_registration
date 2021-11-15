import React from "react";

import congratsImg from "../assets/images/login_API-10.png";

import Image from "./Image";


function Congratulations() {

    return <main className="body congratulations">
        <div className="congratulations-content">
            <p className="page-content-p">Портал разработчика API</p>
            <h1 className="page-content-h1">Поздравляем</h1>
            <p className="congratulations-content-p">Вы успешно зарегистрировались на портале разработчика API</p>
            <div className="page-content-actions">
                <a href="/"><button className="page-content-button page-content-button-blue login-button-blue" type="submit">Войти</button></a>
            </div>
        </div>
        <Image img={congratsImg} style={"congratulations-decorative_image"}/>
    </main>
}

export default Congratulations;