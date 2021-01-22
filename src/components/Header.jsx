import React from "react";

function Header() {
    return <header>
        <a href="/"><div className="top-menu">
            <img src="images/Logo.png" alt="VTB" className="top-menu-logo"/>
            <h2 className="top-menu-text">Паспорт</h2>
        </div></a>
    </header>
}

export default Header;