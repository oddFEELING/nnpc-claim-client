import { useRouter } from 'next/router';
import useFetch from '../../hooks/useFetch';
import React, { useState, useEffect } from 'react';
import { navStore } from '../../global/nav.global';
import { authStore } from '../../global/auth.global';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import PopSuccess from '../../components/lib/pop-ups/popSuccess';

const Index = () => {
  const router = useRouter();
  const { current } = navStore();
  const { otp, setOTP, setToken, secret_ID, setAuth } = authStore();
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const { data, status, isLoading, refetch, error } = useFetch('ADMIN-CONFIRM');

  // ======= handle token change -->
  const onTokenChange = (e) => {
    setOTP(e.target.value);
  };

  // ======= check for data -->
  useEffect(() => {
    secret_ID === '' && router.replace('/');

    // ======= save token to local storage -->
    if (status === 'success') {
      setAuth(true);
      setSuccess(true);
      const token = data.data.data;
      localStorage.setItem('token', token);
      setToken(token);
    }
  }, [status]);

  return (
    <div className='h-screen flex w-full  items-center justify-center'>
      {/* ====== main form */}
      <main className='flex items-center justify-center flex-col gap-9 px-12 rounded-md shadow-lg   py-24 bg-white'>
        <h1 className='font-primary font-bold text-3xl text-gray-700'>
          Enter OTP
        </h1>
        {/* ====== input section */}
        <div className='relative flex items-center justify-center'>
          {visible ? (
            <EyeOffIcon
              className='h-6 w-8 cursor-pointer absolute text-gray-600 right-3'
              onClick={() => setVisible((visible) => !visible)}
            />
          ) : (
            <EyeIcon
              className='h-6 w-8 cursor-pointer absolute text-gray-600 right-3'
              onClick={() => setVisible((visible) => !visible)}
            />
          )}
          <input
            className='px-9 py-3 h-12 w-96 border-none focus:outline-clr-4 font-secondary rounded-md bg-gray-200 shadow-sm'
            type={visible ? 'text' : 'password'}
            value={otp}
            onChange={onTokenChange}
            placeholder='Secret OTP'
          />
        </div>
        {/* ====== Button section */}{' '}
        <button
          className='w-52 h-12 font-primary  bg-clr-4 text-gray-200 shadow-md rounded text-lg'
          onClick={refetch}
        >
          Authenticate
        </button>
        {isLoading && <p>loading...</p>}
        <PopSuccess
          title='login Successful'
          content='You have completed the login process. click continue to access dashboard'
          state={success}
          setState={setSuccess}
          action={() => router.push(`/dashboard/${current.toLowerCase()}`)}
        />
      </main>
    </div>
  );
};

export default Index;
