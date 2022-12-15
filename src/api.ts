import axios, {AxiosInstance, AxiosResponse} from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: "http://172.19.64.179:8081/api/v1",
    headers: {
        "Content-type": "application/json",
    },
});

apiClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config.data)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default apiClient;