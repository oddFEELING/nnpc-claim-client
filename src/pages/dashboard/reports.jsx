import React from 'react';
import DashLayout from '../../layout/Dash.layout';

const Reports = () => {
  return <div>Reports</div>;
};

export default Reports;

Reports.getLayout = (page) => {
  return <DashLayout>{page}</DashLayout>;
};
