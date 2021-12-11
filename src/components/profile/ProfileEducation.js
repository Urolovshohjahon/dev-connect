import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, degree,  fieldofstudy, current, to, from, description },
}) => {
  console.log("Bu tooooooo", typeof(to))
  return (
    <div className='profile_experience' >
      <h3>{school}</h3>
      <p>
      <Moment date={from} format='YYYY/MM/DD' />  - 
        {to==='' ? <Moment date={to} format='YYYY/MM/DD' /> : 'NOW'}
      </p>
      <p>
        <strong>Degree:</strong> {degree}{' '}
      </p>
      <p>
        <strong>Field of study:</strong> {fieldofstudy}{' '}
      </p>
      <p>
        <strong>Description:</strong> {description}{' '}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
