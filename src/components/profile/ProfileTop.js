import React from 'react';
import PropTypes from 'prop-types';
import {SiTwitter, SiFacebook, SiYoutube, SiInstagram, SiLinkedin, SiInternetexplorer} from 'react-icons/si'

const ProfileTop = ({
  profile: {
    status,
    location,
    website,
    company,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className='profile_top'>
      <img src={avatar} className="round-img" alt="kallanga"  />
      <h1>{name}</h1>
      <p>
        {status} {company && <span>at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>} </p>
      <div className="d-flex justify-content-evenly flex-wrap" >
      {website && <a href={`${website}`}  target='_blank' rel=' noopener noreferrer' ><SiInternetexplorer color="white" className="socials"/></a>}
      {social && social.twitter && (
        <a href={`${social.twitter}`} target='_blank' rel='noreferrer' > <SiTwitter className="socials"/></a>
      )}
      {social && social.facebook && (
        <a href={`${social.facebook}`} target='_blank' rel='noreferrer' ><SiFacebook className="socials"/></a>
      )}
      {social && social.youtube && (
        <a href={`${social.youtube}`} target='_blank' rel='noreferrer' ><SiYoutube color="red" className="socials"/></a>
      )}
      {social && social.instagram && (
        <a href={`${social.instagram}`} target='_blank' rel='noreferrer' > <SiInstagram className="socials" color="#8a3ab9 " /></a>
      )}
      {social && social.linkedin && ( 
        <a href={`${social.linkedin}`} target='_blank' rel='noreferrer' ><SiLinkedin className="socials"/></a>
      )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
