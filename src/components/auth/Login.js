import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './auth.css';
import {login} from '../../actions/auth';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

function Login({login, isAuthenticated}) {
  const { register, handleSubmit } = useForm();

  const Submit = (data) => {
    
      const newUser = {
        email: data.email,
        password: data.password1,
      };
      /* const body = JSON.stringify(newUser);
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }; */
      login(newUser)
      
      /* axios
        .post('/api/users',body,config)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err)
        }); */
     
  };


  if(isAuthenticated){
    return <Redirect to='/dashboard' />
  }

  return (
    <div className='register'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Form onSubmit={handleSubmit(Submit)}>
              <h1>Sign In</h1>
              <p>Sign Into your account</p>
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
              
              <Button variant='primary' type='submit'>
                Login
              </Button>
              <h4>
                Don't have an account? <Link to='/register'>Sign Up</Link>
              </h4>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.prototype = {
  login:PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool
}

const mapStateToProps  =state=>({
  isAuthenticated:state.auth.isAuthenticated
})


export default connect(mapStateToProps,{login})(Login);
