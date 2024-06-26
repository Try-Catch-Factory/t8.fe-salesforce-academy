'use client'
import LoginButton from '@/authentication/components/LoginButton';
import LogoutButton from '@/authentication/components/LogoutButton';
import { useUserContext } from '@/authentication/hooks/UserProvider';

const Header: React.FC = () => {
  const { user, isLoading } = useUserContext();

  return (
    <header className="px-10 sm:px-20 pt-5 flex justify-between items-center text-white">
      <h1 className="text-sm sm:text-2xl font-bold text-pyellow-950">Academia XYZ</h1>
      {!isLoading && !user && <LoginButton />}
      {user && <LogoutButton />}
    </header>
  );
};

export default Header;
