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

        const currentDate = new Date().getTime();
        const expireDate = (tokenDecode?.exp ?? currentDate/1000) * 1000;

        if (currentDate > expireDate) {
            return true;
        }

        return false;
    }
}