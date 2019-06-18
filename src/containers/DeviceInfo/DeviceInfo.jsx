import React from "react";
import './DeviceInfo.css'
import GlobalState from "../../context/GlobalState";
import WorkoutContext from "../../context/WorkoutContext";

const styles = {
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
    container: {
        textAlign: 'center', marginTop: '50px',
    },

}

export default  class DeviceInfo extends React.Component{

    static contextType = WorkoutContext;
    render() {
        const props={...this.props, ...this.context};
        return <GlobalState>
            <div className="centered">
                <h1>Device Info</h1>
                <hr/>
                {props.deviceInfo ?

                    <div>
                        <h3><span> Name </span>: <span> {props.deviceInfo.name}</span> </h3>
                        <h3><span> Type </span>: <span> {props.deviceInfo.type}</span> </h3>
                        <h3> <span> IP </span>: <span> {props.ip.join(".")}</span></h3>
                    </div> :
                    <div>
                        <h2>Oops! No device found</h2>
                    </div>
                }

                <div>
                    <button style={styles.button} onClick={props.history.goBack}>Back</button>
                    <button disabled={!props.deviceInfo} style={styles.button}
                            onClick={() => props.history.push('/timer')}>Confirm
                    </button>
                </div>
            </div>
        </GlobalState>
    }
}