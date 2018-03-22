import { call, take, put } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import Types from '../../Redux/Auth/types';

export function* watchLogin() {
  while(true) {
    const { username, password } = yield take(Types.AUTH_LOGIN_ATTEMPT);

    yield call(handleLoginPlayer, username, password);
  }
}

export function* handleLoginPlayer() {
  // perform login here
}
