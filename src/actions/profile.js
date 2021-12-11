import axios from 'axios';
import { setAlert } from './alert';

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('https://urolov-dev-connector.herokuapp.com/api/profile/me');
    dispatch({
      type: 'GET_PROFILE',
      payload: res.data,
    });
    getCurrentProfile()
  } catch (err) {
    dispatch({
      type: 'PROFILE_ERROR',
      payload: { msg: 'err.response.statusText, status: err.response.status' },
    });
  }
};

export const createProfile =
  (formData, history, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post('https://urolov-dev-connector.herokuapp.com/api/profile', formData, config);

      dispatch({
        type: 'GET_PROFILE',
        payload: res.data,
      });
      dispatch(setAlert(edit ? 'Profile updated' : 'Profile created'));
      if (!edit) {
        history.push('/dashboard');
      }
    } catch (err) {
      const errors = err.response.data.errors;

      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      dispatch({
        type: 'PROFILE_ERROR',
        payload: {
          msg: 'err.response.statusText, status: err.response.status',
        },
      });
    }
  };
export const addExperience =
  (formData, history, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.put('https://urolov-dev-connector.herokuapp.com/api/profile/experience', formData, config);

      dispatch({
        type: 'UPDATE_PROFILE',
        payload: res.data,
      });
      dispatch(setAlert('Experience added', 'success'));
      history.push('/dashboard');
    } catch (err) {
      const errors = err.response.data.errors;

      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      dispatch({
        type: 'PROFILE_ERROR',
        payload: {
          msg: 'err.response.statusText, status: err.response.status',
        },
      });
    }
  };
export const addEducation =
  (formData, history, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.put('https://urolov-dev-connector.herokuapp.com/api/profile/education', formData, config);

      dispatch({
        type: 'UPDATE_PROFILE',
        payload: res.data,
      });
      dispatch(setAlert('Education added', 'success'));
      history.push('/dashboard');
    } catch (err) {
      const errors = err.response.data.errors;

      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      dispatch({
        type: 'PROFILE_ERROR',
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`https://urolov-dev-connector.herokuapp.com/api/profile/experience/${id}`);
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: res.data,
    });
    console.log(res.data);
    dispatch(setAlert('Experience deleted', 'success'));
  } catch (err) {
    dispatch({
      type: 'PROFILE_ERROR',
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
export const deleteEducation = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`https://urolov-dev-connector.herokuapp.com/api/profile/education/${id}`);
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: res.data,
    });
    dispatch(setAlert('Education deleted', 'success'));
  } catch (err) {
    dispatch({
      type: 'PROFILE_ERROR',
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!!!')) {
    try {
      await axios.delete(`https://urolov-dev-connector.herokuapp.com/api/profile`);
      dispatch({ type: 'CLEAR_PROFILE' });
      dispatch({ type: 'ACCOUNT_DELETED' });
      dispatch(setAlert('Your account is permanently deleted!'));
    } catch (err) {
      dispatch({
        type: 'PROFILE_ERROR',
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};

export const getProfiles = () => async (dispatch) => {
  try {
    /* dispatch({type:'CLEAR_PROFILE'}) */
    const res = await axios.get('https://urolov-dev-connector.herokuapp.com/api/profile');
    console.log(res.data);
    dispatch({
      type: 'GET_PROFILES',
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: 'PROFILE_ERROR',
      payload: { msg: 'err.response.statusText', status: 'err.response.status' },
    });
  }
};
export const getProfileById = (userID) => async (dispatch) => {
  try {
    const res = await axios.get(`https://urolov-dev-connector.herokuapp.com/api/profile/user/${userID}`);
    dispatch({
      type: 'GET_PROFILES',
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: 'PROFILE_ERROR',
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
export const getGithubRepos = (username) => async (dispatch) => {
  try {
    const res = await axios.get(`https://urolov-dev-connector.herokuapp.com/api/profile/github/${username}`);
    dispatch({
      type: 'GET_REPOS',
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: 'PROFILE_ERROR',
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
