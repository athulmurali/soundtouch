import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Timer from "./components/Timer/Timer";
import App from "./App";

const RoutedApp = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>

                        <Route exact path="/" component={App}/>
                        <Route exact path = "/timer" component ={Timer}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
};

export default RoutedApp