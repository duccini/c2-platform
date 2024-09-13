import React, { createContext, ReactNode, useState } from "react";

// Tipo do usuário
type UserType = {
  username: string;
  email: string;
  token: string;
};

// Tipo do contexto
type PropsUserContext = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

// Valor inicial do contexto
const DEFAULT_VALUE: PropsUserContext = {
  user: {
    username: "",
    email: "",
    token: "",
  },
  setUser: () => {},
};

// Criando o contexto
export const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

// Componente Provider
export default function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType>(DEFAULT_VALUE.user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
