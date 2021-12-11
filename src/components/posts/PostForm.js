import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {addPost} from '../../actions/post';
import {Form, Button, } from 'react-bootstrap'
import { useForm } from 'react-hook-form';

const PostForm = ({addPost}) => {
    const {register, handleSubmit} = useForm()

    const Submit = (data)=>{
        addPost(data);
    }

    return (
        <div className='post-form' >
            <h3>Say something</h3>
            <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Form onSubmit={handleSubmit(Submit)}>
              
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                as='textarea'
                  type='text'
                  {...register('text')}
                  placeholder='New Post'
                />
              </Form.Group>
              
              

              <Button variant='primary' type='submit'>
                Add Post
              </Button>
            </Form>
          </div>
        </div>
      </div>            
        </div>
    )
}

PostForm.propTypes = {
    addPost:PropTypes.func.isRequired
}

export default connect(null, {addPost})(PostForm)
