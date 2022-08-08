import React from 'react';
import DashLayout from '../../layout/Dash.layout';

const Settings = () => {
  return <div>Settings</div>;
};

export default Settings;

Settings.getLayout = (page) => {
  return <DashLayout>{page}</DashLayout>;
};
