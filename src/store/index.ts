import {defineStore} from "pinia";
import LoginService from "../services/LoginService";

export type RootState = {
    token: string | null,
    userRole: string | null
};

export const useMainStore = defineStore({
    id: "mainStore",
    state: () => ({
        token: null,
        userRole: null
    } as RootState),
    getters: {
        getUserRole(state): string {
            return state.userRole!
        }
    },
    actions: {
        onSignin(login: string, password: string) {
            LoginService.singin(login, password).then((response) => {
                this.token = response.data.token
            })
        }
    }
})