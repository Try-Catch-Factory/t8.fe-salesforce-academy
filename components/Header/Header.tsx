'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { useUser } from '@auth0/nextjs-auth0/client';

const Header: React.FC = () => {
  const { user, error, isLoading } = useUser();

  return (
    <header className="px-10 sm:px-20 pt-5 bg-pyellow-200 flex justify-between items-center text-white">
      <h1 className="text-sm sm:text-2xl font-bold text-pyellow-950">Academia XYZ</h1>
      {!isLoading && !user && (
        <Button asChild className="text-sm sm:text-xl" variant="outline">
          <a href="/api/auth/login">Login</a>
        </Button>
      )}
      {user && (
        <Button asChild className="text-sm sm:text-xl" variant="outline">
          <a href="/api/auth/logout">Logout</a>
        </Button>
      )}
    </header>
  );
}

export default Header;
