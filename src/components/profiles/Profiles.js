import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfiles, getCurrentProfile } from '../../actions/profile';
import ProfileItem from './ProfileItem';
import './Profiles.css';

const Profiles = ({ profile: { profiles, loading }, getProfiles, getCurrentProfile }) => {
  useEffect(() => {
    getCurrentProfile();
    getProfiles();
  }, [getProfiles, getCurrentProfile]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h2>Developers</h2>
          <p>Browse and connect with developers</p>
          <div className='profiles'>
            {profiles.map((profile) => (
              <ProfileItem key={profile._id} profile={profile} />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});


export default connect(mapStateToProps, { getProfiles, getCurrentProfile })(Profiles);
