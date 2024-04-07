"use client"
import { createContext, useEffect, useState } from "react";
import { Token, User } from "@/api";

interface IUser {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    firstname: null | string;
    lastname: null | string;
    createdAt: string;
    updatedAt: string;
}

export type AuthContextType = {
    accessToken: null | string;
    user: null | IUser;
    login: (token: string) => void;
    logout: () => void;
    updateUser: (key: string, value: any) => void;
}

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext<AuthContextType>({
    accessToken: null,
    user: null,
    login: () => {},
    logout: () => {},
    updateUser: () => {},
});

export function AuthProvider({ children }: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<null | IUser>(null);
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
        tokenCtrl.removeToken();
        setToken(null);
        setUser(null);
    }

    const updateUser = (key: string, value: any) => {
        setUser({
            ...user,
            [key]: value,
        });
    }

    const data = {
        accessToken: token,
        user,
        login,
        logout,
        updateUser,
    };

    if (loading) return null;

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}
