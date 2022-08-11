import React from 'react';
import useAuth from '../../hooks/useAuth';
import DashLayout from '../../layout/Dash.layout';

const Settings = () => {
  useAuth();
  return <div>Settings</div>;
};

export default Settings;

Settings.getLayout = (page) => {
  return <DashLayout>{page}</DashLayout>;
};
