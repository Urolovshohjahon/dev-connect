import axios from 'axios';
import { setAlert } from './alert';

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('https://urolov-dev-connector.herokuapp.com/api/posts');
    dispatch({
      type: 'GET_POSTS',
      payload: res.data,
    });
    console.log("getPosts");
  } catch (err) {
    dispatch({
      type: 'POST_ERROR',
      payload: {
        msg: 'err.response.statusText',
        status: 'err.response.status',
      },
    });
  }
};


export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`https://urolov-dev-connector.herokuapp.com/api/posts/like/${id}`);
    dispatch({
      type: 'UPDATE_LIKES',
      payload: {id, likes:res.data},
    });
    console.log("addLike");
    console.log(res.data)
  } catch (err) {
    dispatch({
      type: 'POST_ERROR',
      payload: {
        msg: 'err.response.statusText',
        status: 'err.response.status',
      },
    });
  }
};
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`https://urolov-dev-connector.herokuapp.com/api/posts/unlike/${id}`);
    dispatch({
      type: 'UPDATE_LIKES',
      payload: {id, likes:res.data},
    });
    console.log("removeLike");
  } catch (err) {
    dispatch({
      type: 'POST_ERROR',
      payload: {
        msg: 'err.response.statusText',
        status: 'err.response.status',
      },
    });
  }
};


export const deletePost = (id)=> async (dispatch)=>{
  try{

    await axios.delete(`https://urolov-dev-connector.herokuapp.com/api/posts/${id}`)

    dispatch({
      type:'DELETE_POST',
      payload:id
    })
    console.log("deletePost");

    dispatch(setAlert('Post removed', 'success'))

  }
  catch(err){
    dispatch({
      type:'POST_ERROR',
      payload:{msg:err.response.statusText, status:err.response.status}
    })
  }
}



export const addPost = (formData)=> async (dispatch)=>{
  const config = {
    headers:{
      'Content-Type': 'application/json'
    }
  }
  try{

    console.log("addPost")

    const res = await axios.post(`https://urolov-dev-connector.herokuapp.com/api/posts`,formData, config )

    dispatch({
      type:'ADD_POST',
      payload:res.data
    })

    dispatch(setAlert('Post created', 'success'))

  }
  catch(err){
    const errors = err.response.data.errors;
    dispatch({
      type:'POST_ERROR',
      payload:{msg:err.response.statusText, status:err.response.status}
    })
    errors.forEach(error=>dispatch(setAlert(error.msg, 'danger')))
  }
}



export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`https://urolov-dev-connector.herokuapp.com/api/posts/${id}`);
    dispatch({
      type: 'GET_POST',
      payload: res.data,
    });
    console.log("getPost")
  } catch (err) {
    dispatch({
      type: 'POST_ERROR',
      payload: {
        msg: 'err.response.statusText',
        status: 'err.response.status',
      },
    });
  }
};



export const addComment = (postId, formData)=> async (dispatch)=>{
  const config = {
    headers:{
      'Content-Type': 'application/json'
    }
  }
  try{

    

    const res = await axios.post(`https://urolov-dev-connector.herokuapp.com/api/posts/comment/${postId}`,formData, config )

    dispatch({
      type:'ADD_COMMENT',
      payload:res.data
    })
    console.log("addComment")

    dispatch(setAlert('Comment Added', 'success'))

  }
  catch(err){
    /* const errors = err.response.data.errors; */
    dispatch({
      type:'POST_ERROR',
      payload:{msg:err.response.statusText, status:err.response.status}
    })
    /* errors.forEach(error=>dispatch(setAlert(error.msg, 'danger'))) */
  }
}





export const deleteComment = (postId, commentId)=> async (dispatch)=>{
  
  try{

    

    await axios.delete(`https://urolov-dev-connector.herokuapp.com/api/posts/comment/${postId}/${commentId}`)

    dispatch({
      type:'REMOVE_COMMENT',
      payload:commentId
    })

    dispatch(setAlert('Comment Deleted', 'success'));
    console.log("deleteComment")

  }
  catch(err){
    /* const errors = err.response.data.errors; */
    dispatch({
      type:'POST_ERROR',
      payload:{msg:err.response.statusText, status:err.response.status}
    })
    /* errors.forEach(error=>dispatch(setAlert(error.msg, 'danger'))) */
  }
}