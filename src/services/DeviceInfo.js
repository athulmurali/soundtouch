import axios from "axios";

const SERVER_URL = "http://127.0.0.1:5000/";

export const fetchDeviceInfo=(ip_array )=>
    axios.get(SERVER_URL, {
        params: {ip :ip_array.join(".")}});