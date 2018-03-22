import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Router from './Router';
import reducers from './Redux/';
import Sagas from './Sagas';

export default class App extends Component {
  render() {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(Sagas);

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
