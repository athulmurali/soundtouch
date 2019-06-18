import React from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Timer from "./components/Timer/Timer";
import App from "./App";
import IpConfig from "./containers/IpConfig";
import GlobalState from "./context/GlobalState";
import DeviceInfo from "./containers/DeviceInfo";

const RoutedApp = () => {
    return (
        <div>
            <GlobalState>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={App}/>
                            <Route exact path="/ipConfig" component={IpConfig}/>
                            <Route exact path="/deviceInfo" component={DeviceInfo}/>
                            <Route exact path="/timer" component={Timer}/>
                        </Switch>
                    </div>
                </Router>
            </GlobalState>
        </div>
    )
};

export default RoutedApp