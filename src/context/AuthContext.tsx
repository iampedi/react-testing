import { createContext, useContext } from "react";

type AuthContextType = {
  user: { name: string } | null;
};

export const AuthContext = createContext<AuthContextType>({
  user: { name: "Jafar" },
});

export const useAuth = () => useContext(AuthContext);
