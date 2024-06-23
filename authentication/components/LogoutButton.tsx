import { Button } from '@/components/ui/button';

const LogoutButton: React.FC = () => {
  return (
    <Button asChild className="text-sm sm:text-xl" variant="outline">
      <a href="/api/auth/logout">Logout</a>
    </Button>
  );
};

export default LogoutButton;