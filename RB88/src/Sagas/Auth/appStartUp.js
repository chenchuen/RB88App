import { AsyncStorage } from 'react-native';
import { take, call, put } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';

import ReduxActions from '../../Redux/Actions';
import Types from '../../Redux/Auth/types';

export function* watchAppStartUp() {
  while (true) {
    const { startingUp } = yield take(Types.AUTH_APP_START_UP);
    if (startingUp) {
      yield call(handleStartUp);
    }
  }
}

export function* handleStartUp() {
  const playerPreference = yield call(getPlayerPreference);
  console.log(playerPreference);
  yield put(ReduxActions.authAppStartUp(false));
  Actions.LoginScreen();
}

async function getPlayerPreference() {
  const playerPreference = await AsyncStorage.getItem('playerPreference');

  if (playerPreference) {
    return JSON.parse(playerPreference);
  }
  const defaultPreference = {
    isFirstTime: false,
    pushNotification: true,
  };
  await AsyncStorage.setItem('playerPreference', JSON.stringify(defaultPreference));

  return defaultPreference;
}
