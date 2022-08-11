import React from 'react';
import useAuth from '../../hooks/useAuth';
import DashLayout from '../../layout/Dash.layout';

const Reports = () => {
  useAuth();
  return <div>Reports</div>;
};

export default Reports;

Reports.getLayout = (page) => {
  return <DashLayout>{page}</DashLayout>;
};
