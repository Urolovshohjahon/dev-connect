import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { MdDoneOutline } from 'react-icons/md'

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div className='profile_about'>
      {bio && (
        <Fragment>
          <h2>{name.trim().split(' ')[0]}'s bio</h2>
          <p>{bio}</p>
          <div className='line'></div>
        </Fragment>
      )}

      <h2 className='text-primary'>Skill set</h2>
      <div className='skills'>
        {skills.map((skill, index) => (
          <div className='skill' key={index}>
            <MdDoneOutline color="green" />  {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
