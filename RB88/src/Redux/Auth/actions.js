import Types from './types';

const authAppStartUp = (startingUp) => ({
  type: Types.AUTH_APP_START_UP,
  startingUp
});

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

export default {
  authAppStartUp,
  
  authLoginAttempt,
  authLoginSuccess,
  authLoginFailure
};
