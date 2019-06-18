import React from "react";
import WorkoutContext from '../context/WorkoutContext';

export default class IpConfig extends React.Component {

    static contextType = WorkoutContext;

    constructor(props) {
        super(props);
        this.state = {ip: [0, 0, 0, 0]}
    }

    componentDidMount() {
        this.setState({
            ip: this.context.ip
        })
    }


    updateIpIfValid = (index, newVal) => {
        (newVal.toString() === "" || (!isNaN(newVal) && newVal >= 0 && newVal && newVal <= 255)) &&
        this.setState({ip: this.state.ip.map((val, idx) => index === idx ? newVal : val)})
    };

    onClickConfirm = () => {
        this.context.updateIp(this.state.ip,()=>{
            this.props.history.push('/timer')
        });

    }

    render() {
        return (
            <div>
                <h1>Please enter your IP address</h1>
                <div>
                    {this.state.ip.map((val, index) =>
                        <input
                            key={index}
                            maxLength={3}
                            min={0} max={255}
                            value={this.state.ip[index]}
                            onChange={e => {
                                this.updateIpIfValid(index, e.target.value)
                            }}
                            className="inputTextBox"/>)}
                </div>
                <h1>{this.state.ip.join(".")}</h1>
                <button onClick={this.onClickConfirm}> Confirm</button>
            </div>
        )

    }
}