import axios from 'axios';

require('dotenv').config({ path: './config/.env' });
//const apiUrl = process.env.DO_API_URL;
const apiUrl = 'http://localhost:8000/';

export const getData = async (endpoint, params) =>  {
    const res = await axios.get(apiUrl + endpoint);
    return res;
}

export const postData = async (endpoint, params) => {
    const res = await axios.post(apiUrl + endpoint, params);
    return res;
}

export const deleteData = async (endpoint, params) => {
    console.log("delete", params);
    const res = await axios.delete(apiUrl + endpoint, { headers : {} , data : params });
    return res;
}

// const getData = (endpoint, params) => {
//     axios.get(apiUrl + endpoint)
//         .then(res => {
//             return res;
//         })
// }

// const postData = (endpoint, params) => {
//     axios.post(apiUrl + endpoint, params)
//         .then(res => {
//             return res;
//         })
// }

// export default {
//     getData,
//     postData
// };