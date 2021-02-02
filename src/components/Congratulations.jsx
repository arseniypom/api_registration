import React from "react";
import Image from "./Image";



function Congratulations() {

    return <div className="body">
        <div className="congratulations-content">
            <p className="page-content-p">API Developer Portal</p>
            <h1 className="page-content-h1">Поздравляем</h1>
            <p className="congratulations-content-p">Вы успешно зарегистрировались на портале API</p>
            <div className="page-content-actions">
                <a href="/"><button className="page-content-button page-content-button-blue login-button-blue" type="submit">Войти</button></a>
            </div>
        </div>
        <Image img="images/login_API-10.png" style={"congratulations-decorative_image"}/>
    </div>
}

export default Congratulations;