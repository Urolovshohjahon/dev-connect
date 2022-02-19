import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {

  const { register, handleSubmit } = useForm();

  const Submit = (data) => {
    /* const formData = {
      company:data.company,
      website:data.website,
      location:data.location,
      status:data.status,
      skills:data.skills,
      bio:data.bio,
      githubusername:data.githubusername,
      social:{
        youtube:data.youtube,
        twitter:data.twitter,
        facebook:data.facebook,
        linkedin:data.linkedin,
        instagram:data.instagram
      }
    } */
    createProfile(data, history)
  };

  return (
    <div className='register'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Form onSubmit={handleSubmit(Submit)}>
              <h1>Create Your Profile</h1>
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
                <select className='form-select' {...register('status')} ariaLabel='Default select example'>
                  <option selected>Open this select menu</option>
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
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('facebook')}
                  placeholder='Facebook'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('instagram')}
                  placeholder='Instagram'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('linkedin')}
                  placeholder='Linkedin'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('youtube')}
                  placeholder='Youtube'
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

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
