import apiClient from "../api";
import {AxiosResponse} from "axios";


class LoginService {
    async singin(email: string, password: string): Promise<AxiosResponse<any>> {
        return await apiClient.post("/customers/signin", {email: email, password: password}, {
        })
    }
}

export default new LoginService();