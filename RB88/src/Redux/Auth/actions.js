import Types from './types';

const authAppStartUp = (startingUp) => ({
  type: Types.AUTH_APP_START_UP,
  startingUp
});

//Login Section
const authLoginAttempt = (username, password) => ({
  type: Types.AUTH_LOGIN_ATTEMPT,
  username,
  password
});

const authLoginSuccess = () => ({
  type: Types.AUTH_LOGIN_SUCCESS
});

const authLoginFailure = (error) => ({
  type: Types.AUTH_LOGIN_FAILURE,
  error
});

//Register Section
const authRegisterAttempt = (userData) => ({
  type: Types.AUTH_REGISTER_ATTEMPT,
  userData
});

const authRegisterSuccess = () => ({
  type: Types.AUTH_REGISTER_SUCCESS
});

const authRegisterFailure = (error) => ({
  type: Types.AUTH_REGISTER_FAILURE,
  error
});

export default {
  authAppStartUp,

  authLoginAttempt,
  authLoginSuccess,
  authLoginFailure,

  authRegisterAttempt,
  authRegisterSuccess,
  authRegisterFailure,
};
