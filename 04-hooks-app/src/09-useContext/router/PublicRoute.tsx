import { useContext, type ReactNode } from 'react';
import { Navigate } from 'react-router';
import { UserContext } from '../context/UserContext';

interface Props {
  children: ReactNode;
}

export const PublicRoute = ({ children }: Props) => {
  const { authStatus } = useContext(UserContext);

  if (authStatus === 'checking') {
    return null;
  }

  if (authStatus === 'authenticated') {
    return <Navigate to="/profile" replace />;
  }

  return <>{children}</>;
};
