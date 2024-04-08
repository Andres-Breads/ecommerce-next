import { Token } from "@/api";

export async function authFetch(url: string, params?: any): Promise<Response | Error | undefined> {
    const tokenCtrl = new Token();
    const token = tokenCtrl.getToken();

    const logout = () => {
        tokenCtrl.removeToken();
        window.location.replace("/")
    }

    if (!token) {
        logout();
    } else {
        if (tokenCtrl.hasExpired(token)) {
            logout();
        } else {
            const paramsTemp = {
                ...params,
                headers: {
                    ...params?.headers,
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                return await fetch(url, paramsTemp);
            } catch (error: any) {
                return error
            }
        }
    }
}