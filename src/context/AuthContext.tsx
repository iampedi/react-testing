import { createContext, useContext } from "react";

type AuthContextType = {
  user: { name: string } | null;
  loading: boolean;
  error: string | null;
};

export const AuthContext = createContext<AuthContextType>({
  user: { name: "Jafar" },
  loading: false,
  error: null,
});

export const useAuth = () => useContext(AuthContext);
