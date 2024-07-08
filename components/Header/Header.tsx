'use client'
import LoginButton from '@/authentication/components/LoginButton';
import LogoutButton from '@/authentication/components/LogoutButton';
import { useUserContext } from '@/authentication/hooks/UserProvider';

const Header: React.FC = () => {
  const { user, isLoading } = useUserContext();

  return (
    <header className="px-10 sm:px-20 pt-5 flex justify-between items-center text-white">
      <div className="flex items-center">
        <img className="h-10 sm:h-15 rounded-full" src="/img/logo.svg" alt="" />
        <h1 className="text-sm sm:text-2xl font-poppins text-black">IDIOMA<span className="font-taprom">Mundo</span></h1>
      </div>
      {!isLoading && !user && <LoginButton />}
      {user && <LogoutButton />}
    </header>
  );
};

export default Header;
