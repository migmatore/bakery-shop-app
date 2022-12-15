import axios, {AxiosInstance} from "axios";

const cdnClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:8082"
});

export default cdnClient;