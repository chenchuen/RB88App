import { fork } from 'redux-saga/effects';

import { watchAppStartUp } from './appStartUp';

export default () => {
  function* rootSaga() {
    yield fork(watchAppStartUp);
  }

  return { rootSaga };
};
