import React from "react";

import {CircularProgressbar} from 'react-circular-progressbar/dist/index';
import './Timer.css';
import IPConfig from "../IPConfig";

export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.totalTimeMs = 100000;
        this.updateEveryMs = 1000;

        this.state = {
            currentVal: 0
        }

    }
        componentDidMount()
        {
            setInterval( this.updateTimer, this.updateEveryMs  )

        }

        updateTimer=()=>{
            this.setState({currentVal: ((this.state.currentVal + this.updateEveryMs)  % this.totalTimeMs ) });
        };

        render()
        {
            const currentVal = this.state.currentVal;

            const remainingPercentage = Math.ceil((this.totalTimeMs - currentVal)/ this.totalTimeMs * 100);

            return <div style={{textAlign: 'center'}}>
                <IPConfig/>
                <CircularProgressbar value={remainingPercentage} text={`${remainingPercentage}`}/>
            </div>
        }


}

