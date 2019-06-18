import React from "react";
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import IpConfig from "./containers/IpConfig/IpConfig";
import GlobalState from "./context/GlobalState";
import DeviceInfo from "./containers/DeviceInfo/DeviceInfo";
import Timer from "./components/Timer/Timer";

const RoutedApp = () => {

    return (
        <div>
            <GlobalState>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/"  render={(props) => <Redirect to={"/ipConfig"} />}/>
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