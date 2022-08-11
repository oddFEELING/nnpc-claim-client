import React from 'react';
import StaffList from '../../components/dashboard/staff/StaffList.component';
import useAuth from '../../hooks/useAuth';
import DashLayout from '../../layout/Dash.layout';

const Staff = () => {
  useAuth();
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
