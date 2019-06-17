import React from "react";

import {CircularProgressbar} from 'react-circular-progressbar/dist/index';
import './Timer.css';
import IPConfig from "../IPConfig";

export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.totalTimeMs = 10000;
        this.updateEveryMs = 1000;

        this.state = {
            currentVal: 0,
            timedOut: false,
            start: false,
            deviceName: null
        }

    }

    clearAndStartTimer=()=>{
        const currentTimerId =  localStorage.getItem("timerId");
        if (currentTimerId)
            clearInterval(parseInt(currentTimerId))

        localStorage.setItem("timerId", setInterval(this.updateTimer, this.updateEveryMs).toString());
    };


    sendAudioNotifications=()=>{}

    componentDidMount() {
        this.clearAndStartTimer()
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.state.currentVal > 0 && nextState.currentVal === 0) {
            clearInterval(parseInt(localStorage.getItem("timerId")));
            this.setState({timedOut: this.state.timedOut});
        }
    }

    updateTimer = () => {
        this.setState({currentVal: ((this.state.currentVal + this.updateEveryMs) % this.totalTimeMs)});
    };

    startTimer = () => {
        this.setState({start: true})

    }

    render() {
        const currentVal = this.state.currentVal;

        const remainingPercentage = Math.ceil((this.totalTimeMs - currentVal) / this.totalTimeMs * 100);

        return <div style={{textAlign: 'center'}}>
            <IPConfig/>

            <button onClick={this.startTimer}>Start</button>

            {this.state.start && <CircularProgressbar value={remainingPercentage} text={`${remainingPercentage}`}/>}
        </div>
    }


}

