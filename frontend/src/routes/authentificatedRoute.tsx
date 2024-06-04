/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import {useEffect, useState} from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const AuthenticatedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          'https://mtg-tomb.onrender.com/api/auth/check',
          {
            method: 'GET',
            credentials: 'include',
          }
        );

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking authentication', error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthenticatedRoute;