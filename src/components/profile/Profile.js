import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'
import ProfileGithub from './ProfileGithub'
import './Profile.css'

const Profile = ({
  profile: { profile,profiles, loading },
  auth,
  match,
}) => {
    const [selectedProfile, setSelectedProfile] = useState(null)
  useEffect(() => {
    
    
    /* getProfileById(match.params.id); */

    profiles.forEach(profile=>{
        if(profile.user._id===match.params.id)setSelectedProfile(profile)
    })

    // console.log("Bu selected bo'lib Lutfullo brat zo'r",profiles)


  }, [profiles, match.params.id, selectedProfile]);

  return (
    <Fragment>
      {selectedProfile === null /* || loading */ ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="profile_nav">
          <Link to='/profiles' className='btn btn-light'>
            Back to profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === selectedProfile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}
          </div>
          <div className='profile_grid'>
              <ProfileTop profile={selectedProfile} />
              <ProfileAbout profile={selectedProfile} />

                <div className="profile-exp">
                    <h2 className="text-primary">Experience</h2>
                    {
                        selectedProfile.experience.length>0?(
                            <Fragment>
                                {
                                    selectedProfile.experience.map((experience, key)=>(
                                        <ProfileExperience key={key} experience={experience} />
                                    ))
                                }
                            </Fragment>
                        ):(
                            <Fragment> <h4>No experience Credentials</h4></Fragment>
                        )
                    }
                </div>
                <div className="profile-exp">
                    <h2 className="text-primary">Education</h2>
                    {
                        selectedProfile.education.length>0?(
                            <Fragment>
                                {
                                    selectedProfile.education.map((education, key)=>(
                                        <ProfileEducation key={key} education={education} />
                                    ))
                                }
                            </Fragment>
                        ):(
                            <Fragment> <h4>No experience Credentials</h4></Fragment>
                        )
                    }
                </div>
                    {
                        selectedProfile.githubusername&&(
                            <ProfileGithub username={selectedProfile.githubusername} />
                        )
                    }
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { })(Profile);
