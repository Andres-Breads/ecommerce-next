import { ENV } from "@/utils";
import { jwtDecode } from "jwt-decode";

export class Token {
    setToken(token: string) {
        localStorage.setItem(ENV.TOKEN, token);
    }

    getToken() {
        return localStorage.getItem(ENV.TOKEN);
    }

    removeToken() {
        localStorage.removeItem(ENV.TOKEN);
    }

    hasExpired(token: string) {
        const tokenDecode = jwtDecode(token);
        const expireDate = tokenDecode.exp * 1000;
        const currentDate = new Date().getTime();

        if (currentDate > expireDate) {
            return true;
        }

        return false;
    }
}