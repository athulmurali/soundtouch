import * as React from "react";
import WorkoutContext from "./WorkoutContext";

export default class GlobalState extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ip: [0, 0, 0, 0],
            deviceInfo: null
        }
    }

    functions = {
        updateIp: (ip,cb) => this.setState({ip},cb),
        updateDeviceInfo: (deviceInfo,cb) => this.setState({deviceInfo}, cb)
    }


    render() {
        return <WorkoutContext.Provider value={{...this.state , ...this.functions}}>
            {this.props.children}
        </WorkoutContext.Provider>
    }

}