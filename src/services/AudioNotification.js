import axios from 'axios';

import request from 'request'

// const parseString = require('xml2js').parseString;
//
// const getJSONResponse = (url, onSuccess, onFailure) => axios.get(url,  {
//     "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
//         "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
// })
//     .then(response => {
//         const self = this;
//         parseString(response.data, function (err, result) {
//
//             console.log(" I am hrere")
//             if (err)
//                 onFailure(err);
//             else
//                 onSuccess(result);
//         });
//     });
//
//
// export const getInfo = (ipAddress, handleSuccess, handleFailure) => getJSONResponse(ipAddress + "/info", handleSuccess, handleFailure);
//

const options = { method: 'GET',
    url: 'http://192.168.1.113:8090/info',
    headers:
        { 'cache-control': 'no-cache',
            Connection: 'keep-alive',
            'accept-encoding': 'gzip, deflate',
            Host: '192.168.1.113:8090',
            'Postman-Token': '6275265e-182d-4e37-8663-51b18e1f5d16,16b6394a-b651-434b-a20d-2358950a4be0',
            'Cache-Control': 'no-cache',
            Accept: '*/*',
            'User-Agent': 'PostmanRuntime/7.15.0' } };

export const test =()=>request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
