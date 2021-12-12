import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { addLike, removeLike, deletePost } from '../../actions/post';
import {BiLike, BiDislike} from 'react-icons/bi';
import './Post.css'

const PostItem = ({
  post: { _id, text, avatar, user, likes, comments, name, date },
  showActions,
  deletePost,
  auth,
  addLike,
  removeLike,
}) => {
  return (
    <div className='post d-flex justify-content-start'>
      <div>
        <Link to={`/profile/${user}`} className='profile-post'>
          <img src={avatar} alt='' className='round-img' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div className='post_item_body d-flex flex-column justify-content-between ' >
        <p>{text}</p>
        <p >
         <strong> Posted on <Moment format='YYYY/MM/DD'>{date}</Moment> </strong>
        </p>
        {showActions && (
          <div className="d-flex justify-content-between" >
            <button className='btn btn-light' onClick={() => addLike(_id)}>
              <BiLike/>  {likes.length} 
            </button>
            <button className='btn btn-light' onClick={() => removeLike(_id)}>
              <BiDislike/>
              
            </button>
            <Link to={`/posts/${_id}`} className='btn btn-primary'>
              Discussion {comments.length > 0 && comments.length}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                className='btn btn-danger delete_comment'
                onClick={() => deletePost(_id)}
              >
                Delete
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};



PostItem.defaultProps = {
    showActions:true
}

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
