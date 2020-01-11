import { LOGIN_ACTION, LOGIN_ACTION_ERROR } from './../actions/types';

const initialState = {
  data: null,
  error: null,
  status: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        data: action.payload,
        status: 'success'
      };
    case LOGIN_ACTION_ERROR:
      return {
        ...state,
        error: action.payload,
        status: 'error'
      };
    default: {
      return {
        ...state
      }
    }
  }
}