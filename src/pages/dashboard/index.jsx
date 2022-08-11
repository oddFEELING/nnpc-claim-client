import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { navStore } from '../../global/nav.global';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

const Index = () => {
  const { current } = navStore();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [token, setToken] = useState('');

  // ======= handle token change -->
  const onTokenChange = (e) => {
    setToken(e.target.value);
  };
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
            value={token}
            onChange={onTokenChange}
            placeholder='Secret OTP'
          />
        </div>
        {/* ====== Button section */}{' '}
        <button
          className='w-52 h-12 font-primary  bg-clr-4 text-gray-200 shadow-md rounded text-lg'
          onClick={() => router.push(`/dashboard/${current.toLowerCase()}`)}
        >
          Authenticate
        </button>
      </main>
    </div>
  );
};

export default Index;
