import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./Header";
import Login from "./Login";
import Registration from "./Registration";
import ResetPassword from "./ResetPassword";


function App() {
    return <div className="main_div">
        <Header />
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/password-reset" component={ResetPassword} />
                <Route exact path="/registration" component={Registration} />
            </Switch>
        </Router>
    </div>
}

export default App;