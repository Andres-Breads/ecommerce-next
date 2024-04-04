import { createContext } from "react";

export const AuthContext = createContext({
    accessToken: null,
    user: null,
    login: null,
    logout: null,
    updateUser: null,
});

export function AuthProvider({ children }: {
    children: React.ReactNode;
}) {
    const data = {
        accessToken: null,
        user: null,
        login: null,
        logout: null,
        updateUser: null,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}
