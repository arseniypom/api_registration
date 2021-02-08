import React from "react";
import {Switch, Route} from "react-router-dom";

import {Header, Login, Registration, ResetPassword, RestorePassword, Confirmation, Congratulations} from "./components"
// import Header from "./components/Header";
// import Login from "./components/Login";
// import Registration from "./components/Registration";
// import ResetPassword from "./components/ResetPassword";
// import RestorePassword from "./components/RestorePassword";
// import Confirmation from "./components/Confirmation";
// import Congratulations from "./components/Congratulations";


function App() {
    return <div className="main_div">
        <Header />
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/password-reset" component={ResetPassword} />
            <Route exact path="/password-restore" component={RestorePassword} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Route exact path="/congratulations" component={Congratulations} />
        </Switch>
    </div>
}

export default App;