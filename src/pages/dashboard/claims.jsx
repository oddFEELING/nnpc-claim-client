import React from 'react';
import DashLayout from '../../layout/Dash.layout';
import { claimStore } from '../../global/claim.global';
import Open from '../../components/dashboard/claims/Open.component';
import Manage from '../../components/dashboard/claims/manage/Manage.component';
import useAuth from '../../hooks/useAuth';

const Claims = () => {
  useAuth();
  const { claim } = claimStore();
  return (
    <div className='grid grid-cols-5 gap-5'>
      <Open />
      <Manage />
    </div>
  );
};

export default Claims;

Claims.getLayout = (page) => {
  return <DashLayout>{page}</DashLayout>;
};
