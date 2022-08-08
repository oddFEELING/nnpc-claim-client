import React from 'react';
import Events from '../../components/dashboard/home/Events';
import InfoCards from '../../components/dashboard/home/InfoCards.component';
import DashLayout from '../../layout/Dash.layout';

const Dashboard = () => {
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
