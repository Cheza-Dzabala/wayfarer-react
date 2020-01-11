import Axios from './../helpers/axios';
import { LOGIN_ACTION, LOGIN_ACTION_ERROR } from './types';


export const loginAction = (credentials) => (dispatch) => {
  Axios.post('/auth/signin', credentials).then((response) => {
    localStorage.setItem('token', response.data.data.token)
    dispatch({
      type: LOGIN_ACTION,
      payload: response.data
    })
  }).catch((error) => {
    console.log(error)
    dispatch({
      type: LOGIN_ACTION_ERROR,
      payload: error.response.data
    })
  });
}