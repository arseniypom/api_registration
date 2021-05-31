import React from "react";
import {Switch, Route} from "react-router-dom";

import {Header, Login, Registration, ResetPassword, RestorePassword, EmailConfirmation, ResetPasswordConfirmation,  Congratulations} from "./components"


function App() {
    return <div className="main_div">
        <Header />
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/password-reset" component={ResetPassword} />
            <Route exact path="/password-restore" component={RestorePassword} />
            <Route exact path="/email-confirmation" component={EmailConfirmation} />
            <Route exact path="/password-reset-confirmation" component={ResetPasswordConfirmation} />
            <Route exact path="/congratulations" component={Congratulations} />
        </Switch>
    </div>
}

export default App;