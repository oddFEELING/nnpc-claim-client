import React from 'react';
import DashLayout from '../../layout/Dash.layout';
import useAuth from '../../hooks/useAuth';
import Events from '../../components/dashboard/home/Events';
import InfoCards from '../../components/dashboard/home/InfoCards.component';

const Dashboard = () => {
  useAuth();
  return (
    <div className='flex flex-col gap-6 justify-start w-full'>
      <InfoCards />
      <Events />
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = (page) => {
  return <DashLayout>{page}</DashLayout>;
};
