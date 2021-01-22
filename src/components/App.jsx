import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./Header";
import Login from "./Login";
import Registration from "./Registration";
import ResetPassword from "./ResetPassword";
import RestorePassword from "./RestorePassword";
import Confirmation from "./Confirmation";



function App() {
    return <div className="main_div">
        <Header />
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/registration" component={Registration} />
                <Route exact path="/password-reset" component={ResetPassword} />
                <Route exact path="/password-restore" component={RestorePassword} />
                <Route exact path="/confirmation" component={Confirmation} />
            </Switch>
        </Router>
    </div>
}

export default App;