import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {deleteComment } from '../../actions/post'

const CommentItem = ({deleteComment, postId, comment:{_id, text, name, avatar, user, date}, auth}) => {
    return (
        <div className='post_comment  d-flex justify-content-start'>
      <div>
        <Link to={`/profile/${user}`} className='profile-post' >
          <img src={avatar} alt='' className='round-img' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div className='post_item_body d-flex flex-column justify-content-between' >
        <p>{text}</p>
        <p className='post_date'>
          <strong>Commented on <Moment format='YYYY/MM/DD'>{date}</Moment></strong>
        </p>
        {!auth.loading && user === auth.user._id && (
              <button
                className='btn btn-danger'
                onClick={() => deleteComment(postId,_id)}
              >
                Delete
              </button>
            )}
      </div>
    </div>
    )
}

CommentItem.propTypes = {
    postId: PropTypes.string.isRequired,
    comment: PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
}

const mapStateToProps=state=>({
    auth:state.auth
})

export default connect(mapStateToProps,{deleteComment})(CommentItem)


/*  {!auth.loading && user === auth.user._id && (
              <button
                className='btn btn-danger'
                onClick={() => deletePost(_id)}
              >
                Delete
              </button>
            )} */