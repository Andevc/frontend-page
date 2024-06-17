import axios from "axios";
// https://proyecto-web3-flask.onrender.com/
// https://visualpantheon.up.railway.app/

const axiosInstance = axios.create({
    baseURL: "https://proyecto-web3-flask.onrender.com/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }

});

export default axiosInstance;

