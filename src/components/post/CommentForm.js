import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const CommentForm = ({postId, addComment }) => {
  const { register, handleSubmit } = useForm();

  const Submit = (data) => {
      console.log(postId, data)
    addComment(postId, data);
  };

  return (
    <div className='post-form'>
      <h3>Leave a comment</h3>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Form onSubmit={handleSubmit(Submit)}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  as='textarea'
                  type='text'
                  {...register('text')}
                  placeholder='New Comment'
                />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Add Comment
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
