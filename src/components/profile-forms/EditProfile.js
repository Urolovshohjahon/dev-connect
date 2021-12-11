import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  createProfile,
  getCurrentProfile,
  profile: { profile, loading },
  history,
}) => {
  const [status, setStatus] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [company, setCompany] = useState('');
  const [skills, setSkills] = useState('');
  const [githubusername, setGithubusername] = useState('');
  const [bio, setBio] = useState('');
  const [twitter, setTwitter] = useState('');
  const [youtube, setYoutube] = useState('');
  const [facebook, setFacebook] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [instagram, setInstagram] = useState('');

  const { register, handleSubmit } = useForm();

  const Submit = (data) => {
    const formData = {
      status,
      website,
      location,
      company,
      skills,
      githubusername,
      bio,
      twitter,
      youtube,
      facebook,
      linkedin,
      instagram,
    };
    console.log(formData);
    createProfile(formData, history, true);
  };

  const setSocials = (loading, profile) => {
    setCompany(loading || !profile.company ? '' : profile.company);
    setWebsite(loading || !profile.website ? '' : profile.website);
    setLocation(loading || !profile.location ? '' : profile.location);
    setStatus(loading || !profile.status ? '' : profile.status);
    setGithubusername(
      loading || !profile.githubusername ? '' : profile.githubusername
    );
    setBio(loading || !profile.bio ? '' : profile.bio);
    setTwitter(loading || !profile.social ? '' : profile.social.twitter);
    setFacebook(loading || !profile.social ? '' : profile.social.facebook);
    setYoutube(loading || !profile.social ? '' : profile.social.youtube);
    setLinkedin(loading || !profile.social ? '' : profile.social.linkedin);
    setInstagram(loading || !profile.social ? '' : profile.social.instagram);
    setSkills(loading || !profile.skills ? '' : profile.skills.join(','));
    console.log("Salomlar hammaga hammaga hammaga hammaga");
  };

  useEffect(() => {
    getCurrentProfile();
    /* setPROFILE({
          company: loading|| !profile.company?'' :profile.company,
          website:loading|| !profile.website?'':profile.website,
          location:loading|| !profile.location?'':profile.location,
          status:loading|| !profile.status?'':profile.status,
          skills:loading|| !profile.skills?'':profile.skills.join(','),
          githubusername:loading|| !profile.githubusername?'':profile.githubusername,
          bio:loading|| !profile.bio?'':profile.bio,
          twitter:loading|| !profile.social?'':profile.social.twitter,
          facebook:loading|| !profile.social?'':profile.social.facebook,
          youtube:loading|| !profile.social?'':profile.social.youtube,
          instagram:loading|| !profile.social?'':profile.social.instagram,
          linkedin:loading|| !profile.social?'':profile.social.linkedin,
      }) */
    setSocials(loading, profile);
  }, [getCurrentProfile, loading, profile]);

  return (
    <div className='register'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Form onSubmit={handleSubmit(Submit)}>
              <h1>Update Your Profile</h1>
              <p>Let's get some information to make your profile stand out</p>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                {/* <Form.Select
                  {...register('status')}
                  aria-label='Default select example'
                >
                  <option>*Open this select menu</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </Form.Select> */}
                <select
                  className='form-select'
                  {...register('status')}
                  aria-label='Default select example'
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  defaultValue='0'
                >
                  <option  value='0' >Open this select menu</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
                <Form.Text className='text-muted'>
                  Give us an idea of where you are at in your career
                </Form.Text>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('company')}
                  placeholder='Company'
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  Could be your own company or one you work for
                </Form.Text>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('website')}
                  placeholder='Website'
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  Could be your or own company website
                </Form.Text>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('location')}
                  placeholder='Location'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  City and state suggested
                </Form.Text>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('skills')}
                  placeholder='*Skills'
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  Please use comma separated values
                </Form.Text>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('githubusername')}
                  placeholder='Github Username'
                  value={githubusername}
                  onChange={(e) => setGithubusername(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  Please use comma separated values
                </Form.Text>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('bio')}
                  placeholder='A short bio of yourself'
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  Please use comma separated values
                </Form.Text>
              </Form.Group>
              <h1>Social networks</h1>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('twitter')}
                  placeholder='Twitter'
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('facebook')}
                  placeholder='Facebook'
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('instagram')}
                  placeholder='Instagram'
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('linkedin')}
                  placeholder='Linkedin'
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('youtube')}
                  placeholder='Youtube'
                  value={youtube}
                  onChange={(e) => setYoutube(e.target.value)}
                />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Submit
              </Button>
              <Link to='/dashboard' className='btn btn-secondary'>
                Go back
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
