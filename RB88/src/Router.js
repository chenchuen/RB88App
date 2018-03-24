import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoadingScreen from './Containers/Auth/LoadingScreen';
import LoginScreen from './Containers/Auth/Login';
import RegisterScreen from './Containers/Auth/Register';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' initial>
        <Scene
          key="LoadingScreen"
          component={LoadingScreen}
          initial
          hideNavBar
        />
        <Scene
          key='LoginScreen'
          component={LoginScreen}
          hideNavBar
        />
        <Scene
          key='RegisterScreen'
          component={RegisterScreen}
          hideNavBar
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
