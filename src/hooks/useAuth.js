import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { authStore } from '../global/auth.global';

const useAuth = () => {
  const router = useRouter();
  const { isAuthenticated } = authStore();

  useEffect(() => {
    // TODO: Make this commented code check if from server if the token is authentic
    // TODO: Duplicate code exists in useEffect() at layouts/DashLayout
    // const currentToken = localStorage.getItem('token');
    // if (currentToken && currentToken.length > 5) setToken(currentToken);
    // else router.replace('/');

    if (!isAuthenticated) {
      router.replace('/');
      alert('No user found');
    }
  }, []);

  return;
};

export default useAuth;
