import React from 'react';
import SpreadComponent from '../../components/dashboard/reports/Spread.component';
import useAuth from '../../hooks/useAuth';
import DashLayout from '../../layout/Dash.layout';

const Reports = () => {
  useAuth();
  return (
    <div className='w-full h-[800px] flex items-center justify-center'>
      <SpreadComponent />
    </div>
  );
};

export default Reports;

Reports.getLayout = (page) => {
  return <DashLayout>{page}</DashLayout>;
};
