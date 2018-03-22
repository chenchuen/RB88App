import { createReducer } from 'reduxsauce';
import Reducers from './reducers';
import Types from './types';

export default {
  reducer: createReducer(Reducers.INITIAL_STATE, {
    [Types.AUTH_APP_START_UP]: Reducers.setStartUp,

    [Types.AUTH_LOGIN_ATTEMPT]: Reducers.setLoginAttempt,
    [Types.AUTH_LOGIN_SUCCESS]: Reducers.setLoginSuccess,
    [Types.AUTH_LOGIN_FAILURE]: Reducers.setLoginFailure,

    [Types.AUTH_REGISTER_ATTEMPT]: Reducers.setRegisterAttempt,
    [Types.AUTH_REGISTER_SUCCESS]: Reducers.setRegisterSuccess,
    [Types.AUTH_REGISTER_FAILURE]: Reducers.setRegisterFailure,

  })
};
