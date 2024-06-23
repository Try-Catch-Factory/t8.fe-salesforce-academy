import { createContext, useContext, ReactNode } from 'react';
import { useUser, UserProfile } from '@auth0/nextjs-auth0/client';

interface UserContextType {
    user: UserProfile | null | undefined; 
    error: Error | null | undefined;
    isLoading: boolean;
  }

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user, error, isLoading } = useUser();

  return (
    <UserContext.Provider value={{ user, error, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};