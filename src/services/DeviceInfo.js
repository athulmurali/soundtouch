import axios from "axios";

const SERVER_URL = "http://127.0.0.1:5000/";

export const fetchDeviceInfo=(url= SERVER_URL,ip_array )=>
    axios.get(url, {
        params: {ip : "http://" + ip_array.join(".")}});