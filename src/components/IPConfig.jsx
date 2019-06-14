import React from "react";

export default class IPConfig extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ipVal: [0, 0, 0, 0]
        }
    }

    updateIp = (index, newVal) => {
        (newVal.toString() === "" ||  (!isNaN(newVal) && newVal >= 0 && newVal && newVal <=255 ) )  &&
        this.setState({ipVal: this.state.ipVal.map((val, idx) => index === idx ? newVal :val)})
    };

    render() {
        return (
            <div>
                <h1>Please enter your IP address</h1>
                <div>
                    {this.state.ipVal.map((val, index) =>
                        <input
                            key={index}
                            maxLength={3}
                            min={0} max={255}
                            value={this.state.ipVal[index]}
                            onChange={e => {this.updateIp(index, e.target.value)}}
                            className="inputTextBox" />)}
                </div>

            </div>)

    }
}