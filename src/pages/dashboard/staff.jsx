import React from 'react';
import StaffList from '../../components/dashboard/staff/StaffList.component';
import DashLayout from '../../layout/Dash.layout';

const Staff = () => {
  return (
    <div>
      <StaffList />
    </div>
  );
};

export default Staff;

Staff.getLayout = (page) => {
  return <DashLayout>{page}</DashLayout>;
};
