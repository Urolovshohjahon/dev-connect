import React from 'react';
import PropTypes from 'prop-types';
import {addEducation} from '../../actions/profile';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';

const AddEducation = ({addEducation, history}) => {
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
    addEducation(data, history)
  };
    return (
        <div className='register'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Form onSubmit={handleSubmit(Submit)}>
              <h1>Add an education</h1>
              <p>Add any school or bootcamp that you have attended</p>
              
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <h6>* is required</h6>
                <Form.Control
                  type='text'
                  {...register('school')}
                  placeholder='*School or bootcamp'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('degree')}
                  placeholder='*Degree or certificate'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('fieldofstudy')}
                  placeholder='Field of study'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='date'
                  {...register('from')}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Check
                  type='checkbox'
                  {...register('current')}
                  label="Current Job"
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='date'
                  {...register('to')}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('description')}
                  placeholder='Program description'
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
    )
}

AddEducation.propTypes = {
    addEducation:PropTypes.func.isRequired,
}

export default connect(null, {addEducation})(withRouter(AddEducation))
