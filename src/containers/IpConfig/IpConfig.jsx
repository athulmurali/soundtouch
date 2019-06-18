import React from "react";
import WorkoutContext from '../../context/WorkoutContext';
import {fetchDeviceInfo} from "../../services/DeviceInfo";


const styles = {
    input: {
        fontSize: 40, outline: 'none', width: '100px',
        borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottom: '1px solid',
        textAlign: 'right', marginRight: '5px'
    },

    button: {
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

}

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
        this.context.updateIp(this.state.ip, () => {
            fetchDeviceInfo(this.state.ip)
                .then(({data}) => {
                    this.context.updateDeviceInfo(data.info)
                    this.props.history.push('/deviceInfo')
                }
            ).catch(err => {
                console.error(err);
                this.props.history.push('/deviceInfo')

            })});
    }

    render() {
        return (
            <div className="centered">
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
                            style={styles.input}/>)}
                </div>
                <button style={styles.button} onClick={this.onClickConfirm}> Confirm</button>
            </div>
        )

    }
}