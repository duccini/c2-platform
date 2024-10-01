"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definindo o tipo de usuário
type UserType = {
  username: string;
  email: string;
  token: string;
};

// Tipagem para o contexto
type UserContextType = {
  user: UserType | null; // O usuário pode ser nulo inicialmente
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

// Criando o contexto com valor inicial como `null`
const UserContext = createContext<UserContextType | undefined>(undefined);

// Criando o provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para acessar o contexto
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
