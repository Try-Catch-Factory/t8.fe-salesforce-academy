import React from 'react';
import { Button } from '@/components/ui/button';

const LoginButton: React.FC = () => {
  return (
    <Button asChild className="text-sm sm:text-xl" variant="outline">
      <a href="/api/auth/login">Login</a>
    </Button>
  );
};

export default LoginButton;