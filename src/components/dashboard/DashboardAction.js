import React from 'react';
import { Link } from 'react-router-dom';

function DashboardAction() {
  return (
    <div className='d-flex justify-content-around'>
      <Link className='btn btn-primary' to='/edit-profile'>Edit profile</Link>
      <Link className='btn btn-primary' to='/add-experience'>Add experience</Link>
      <Link className='btn btn-primary' to='/add-education'>Add education</Link>
    </div>
  );
}

export default DashboardAction;
