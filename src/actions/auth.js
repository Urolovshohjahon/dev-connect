import axios from 'axios';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';
import {getCurrentProfile} from './profile'

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('https://urolov-dev-connector.herokuapp.com/api/auth');
    dispatch({
      type: 'USER_LOADED',
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    dispatch({ type: 'AUTH_ERROR' });
  }
};

export const registered =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post('https://urolov-dev-connector.herokuapp.com/api/users', body, config);
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));

      dispatch({ type: 'REGISTER_FAIL' });
    }
  };
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post('https://urolov-dev-connector.herokuapp.com/api/auth', body, config);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data,
      });
    } catch (err) {
      dispatch(setAlert("Login qilishda xatolik qayta urinib ko'ring", 'danger'));

      dispatch({ type: 'LOGIN_FAIL' });
    }
  };

export const logout = () => (dispatch) => {
  dispatch({ type: 'CLEAR_PROFILE' });
  dispatch({ type: 'LOGOUT' });
};