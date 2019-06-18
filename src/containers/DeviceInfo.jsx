import React from "react";


const DeviceInfo =(props,context)=>{


    console.log(props)
    return <div>
        <h1>Device Name</h1>
        <h2> IP : </h2>
        <h3>Model : </h3>
        <div>

            <button onClick={props.history.goBack}>Back</button>
            <button>Confirm</button>
        </div>
    </div>

}

export default  DeviceInfo