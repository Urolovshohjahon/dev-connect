import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { location, company, title, current, to, from, description },
}) => {



  return (
    <div className='profile_experience' >
      <h3>{company}</h3>
      <p>
         <Moment date={from} format='YYYY/MM/DD' />  - 
        {to==='' ? <Moment date={to} format='YYYY/MM/DD' /> : 'NOW'}
      </p>
      <p>
        <strong>Position:</strong> {title}{' '}
      </p>
      <p>
        <strong>Description:</strong> {description}{' '}
      </p>
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
