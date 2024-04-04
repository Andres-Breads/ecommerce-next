"use client"
import { createContext, useEffect, useState } from "react";
import { Token, User } from "@/api";

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider({ children }: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState<null | string>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const token = tokenCtrl.getToken();

            if (!token) {
                logout();
                setLoading(false);
                return;
            }

            if (tokenCtrl.hasExpired(token)) {
                logout();
            } else {
                await login(token);
            }
        })()
        return () => {
        }
    }, []);
    

    const login = async (token: string) => {
        try {
            tokenCtrl.setToken(token);
            const response = await userCtrl.getMe();
            setUser(response);
            setToken(token);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    const logout = () => {

    }

    const data = {
        accessToken: token,
        user,
        login,
        logout,
        updateUser: null,
    };

    if (loading) return null;

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}
