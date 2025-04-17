import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  userName: string | null;
  setUserName: (name: string) => void;
  clearUserName: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userName, setUserNameState] = useState<string | null>(null);

  useEffect(() => {
    // Load user name from local storage on initial render
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserNameState(storedName);
    }
  }, []);

  const setUserName = (name: string) => {
    localStorage.setItem('userName', name);
    setUserNameState(name);
  };

  const clearUserName = () => {
    localStorage.removeItem('userName');
    setUserNameState(null);
  };

  return (
    <AuthContext.Provider value={{ userName, setUserName, clearUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};