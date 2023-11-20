import { Navigate } from 'react-router-dom';
import { auth } from '../_libs/apis/auth';
import { LOGIN } from '../_libs/site-navigation';

type Props = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
  const isAuthenticated = auth.currentUser;

  if (!isAuthenticated) {
    return <Navigate to={LOGIN.href} />;
  }
  return <>{children}</>;
};
