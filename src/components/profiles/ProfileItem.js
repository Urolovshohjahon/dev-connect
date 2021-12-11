import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdDoneOutline } from 'react-icons/md';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className='profile  bg-light'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={avatar} alt='avatar' className='round-img' />
          </div>
          <div className='col-md-4 d-flex align-items-center justify-content-between flex-column'>
            <h2>{name}</h2>
            <p>
              {status} {company && <span>at {company}</span>}
            </p>
            <p className='my-1'>{location && <span>{location}</span>}</p>
            <Link to={`/profile/${_id}`} className='btn btn-primary'>
              View Profile
            </Link>
          </div>

          <div className='col-md-4 d-flex flex-column align-items-center'>
            <h2>Skills</h2>
            <ul>
              {skills.map((skill, index) => (
                <li key={index} className='text-success'>
                  <MdDoneOutline color='green' /> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
