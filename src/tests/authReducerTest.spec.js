import moxios from 'moxios';
import axios from '../helpers/axios';
import { loginAction } from './../actions/authActions';
import { LOGIN_ACTION, LOGIN_ACTION_ERROR } from './../actions/types';
import configureStore from "redux-mock-store";
import thunk from 'redux-thunk';

let store;
const mockedStore = configureStore([thunk]);

const userInfo = { email: 'dzabalamacheza@gmail.com', password: 'Pa55w0rd' };
const wrongInfo = { email: 'email', passworf: 'password' };

const loginSuccess = {
  status: 200,
  response: {
    status: 200,
    message: 'User logged in successfully!',
    data: {
      userID: 8,
      username: 'cheza',
      email: 'dzabalamacheza@gmail.com',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo4LCJpc1ZlcmlmaWVkIjp0cnVlLCJlbWFpbCI6ImNhcmV0bWFuYWdlckBnbWFpbC5jb20iLCJyb2xlIjo0LCJsaW5lTWFuYWdlciI6OX0sImlhdCI6MTU3NTgxMTE1MCwiZXhwIjoxNTc1ODk3NTUwfQ.pRHqycBLboBC3ohC5OPA0_XrOaB5_jLgPlw3W3WSxsA',
    },
  },
};

const loginFailure = {
  status: 400,
  response: {
    status: 400,
    message: 'Incorrect email or password!',
  },
};


describe('actions', () => {
  beforeEach(() => {
    store = mockedStore();
    moxios.install(axios);
  });


  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('Should successfully login ', async () => {
    moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      request.respondWith(loginSuccess);
      await cleanUp();
    });

    await store.dispatch(loginAction(userInfo));
    const calledAction = store.getActions();
    console.log(calledAction);

    // expect(calledAction[0].type).toEqual(LOGIN_SUCCESS)
  });


})
