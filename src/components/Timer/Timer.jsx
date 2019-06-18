import React from "react";

import {CircularProgressbar} from 'react-circular-progressbar/dist/index';
import './Timer.css';


const styles = {
    startStopButton: {
        padding: 4,
        margin: '30px',
        height: "40px",
        fontSize: '20px',
        fontFamily: 'Gotham',
        borderRadius: '15px',
        minWidth: '100px',
        cursor: 'pointer',
        outline: 'none',
    },
    container: {
        textAlign: 'center', marginTop: '50px',
    },
    input: {
        fontSize: 40, outline: 'none', width: '100px',
        borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottom: '1px solid',
        textAlign: 'right'
    },
    formContainer: {
        paddingTop: '35vh',
        textAlign: 'center'

    }
}

const initialState = {
    currentVal: 0,
    start: false,
    deviceName: null,
    showTimer: false,
    totalTimeMs: 10000
};

const MAX_SECONDS = 9999;
export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.updateEveryMs = 1000;
        this.state = {...initialState}
    }

    clearAndStartTimer = () => {
        this.setState({showTimer: true});
        const currentTimerId = localStorage.getItem("timerId");
        if (currentTimerId)
            clearInterval(parseInt(currentTimerId))
        localStorage.setItem("timerId", setInterval(this.updateTimer, this.updateEveryMs).toString());
    };

    stopAndClearTimer = () => {

        const currentTimerId = localStorage.getItem("timerId");
        if (currentTimerId) {
            clearInterval(parseInt(currentTimerId))
            this.setState({showTimer: false, currentVal: 0});
        }
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.state.currentVal > 0 && nextState.currentVal === 0) {
            clearInterval(parseInt(localStorage.getItem("timerId")));
            setTimeout(() => this.setState({showTimer: false}), 1000);
        }
    }

    updateTimer = () => {
        this.setState({currentVal: ((this.state.currentVal + this.updateEveryMs) % this.state.totalTimeMs)});
    };

    updateSecondsIfValid = (newValInSeconds) => {
        if (newValInSeconds.toString() === "") {
            this.setState({totalTimeMs: 0})
        }
        else{
            !isNaN(newValInSeconds) &&
            newValInSeconds >= 0 && newValInSeconds && newValInSeconds <= MAX_SECONDS &&
            this.setState({totalTimeMs: parseInt(newValInSeconds) * 1000});
        }

    }

    render() {
        const currentVal = this.state.currentVal;
        const remainingPercentage = (this.state.totalTimeMs - currentVal) / this.state.totalTimeMs * 100;
        const textToDisplay = Math.ceil((this.state.totalTimeMs - currentVal) / 1000);
        return <div style={styles.container}>
            {!!this.state.showTimer ?
                <div>
                    <CircularProgressbar value={remainingPercentage} text={`${textToDisplay}`}/>
                    <button style={styles.startStopButton} onClick={this.stopAndClearTimer}> Stop</button>

                </div> :
                <div style={styles.formContainer}>
                    <form>
                        <input type="text" maxLength={4} size={4} style={styles.input}
                               value={this.state.totalTimeMs / 1000}
                               onChange={e => this.updateSecondsIfValid(e.target.value)}/>
                        <label> Seconds
                        </label>
                    </form>
                    <button onClick={this.clearAndStartTimer} style={styles.startStopButton}>Start</button>
                </div>
            }
        </div>
    }
}

