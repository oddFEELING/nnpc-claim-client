import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { authStore } from '../global/auth.global';

const useAuth = () => {
  const router = useRouter();
  const { isAuthenticated } = authStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/');
      alert('No user found');
    }
  }, []);

  return;
};

export default useAuth;
