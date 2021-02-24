import React from "react";

import Logo from "../assets/images/Logo.png";

function Header() {
    return <header className="header">
        <a href="/"><div className="top-menu">
            <img src={Logo} alt="VTB" className="top-menu-logo"/>
            <h2 className="top-menu-text">API</h2>
        </div></a>
    </header>
}

export default Header;