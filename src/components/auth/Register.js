import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './auth.css';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { registered } from '../../actions/auth';
import PropTypes from 'prop-types';

function Register({ setAlert, registered, isAuthenticated }) {
  const { register, handleSubmit } = useForm();

  const Submit = (data) => {
    if (data.password1 === data.password2) {
      const newUser = {
        name: data.fullname,
        email: data.email,
        password: data.password1,
      };
      registered(newUser);
      /* const body = JSON.stringify(newUser);
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      axios
        .post('/api/users',body,config)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err)
        }); */
    } else {
      setAlert('Parollar teng emas', 'okokokok');
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='register'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Form onSubmit={handleSubmit(Submit)}>
              <h1>Sign Up</h1>
              <p>Create Your Account</p>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='text'
                  {...register('fullname')}
                  placeholder='Enter name'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='email'
                  {...register('email')}
                  placeholder='Enter email'
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Control
                  type='password'
                  {...register('password1')}
                  placeholder='Password'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Control
                  type='password'
                  {...register('password2')}
                  placeholder='Confirm Password'
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Register
              </Button>
              <h4>
                Already have an account? <Link to='/login'>Sign In</Link>
              </h4>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, registered })(Register);
