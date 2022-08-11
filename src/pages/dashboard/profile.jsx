import React from 'react';
import { useRouter } from 'next/router';
import { navStore } from '../../global/nav.global';
import DashLayout from '../../layout/Dash.layout';
import Info from '../../components/dashboard/profile/Info.component';
import Hero from '../../components/dashboard/profile/Hero.component';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  useAuth();
  const { setCurrent } = navStore();
  const router = useRouter();
  return (
    <div className='flex flex-col gap-6'>
      <Hero />
      <Info />
      <button
        type='button'
        className=' px-4 py-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none  w-full md:w-64'
        onClick={() => {
          router.replace('settings');
          setCurrent('Settings');
        }}
      >
        View settings
      </button>
    </div>
  );
};

export default Profile;

Profile.getLayout = (page) => {
  return <DashLayout>{page}</DashLayout>;
};
