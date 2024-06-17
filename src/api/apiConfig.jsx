import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://visualpantheon.up.railway.app/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }

});

export default axiosInstance;

