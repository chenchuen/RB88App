import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoadingScreen from './Containers/Auth/LoadingScreen';
import LoginScreen from './Containers/Auth/Login';

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
      </Scene>
    </Router>
  );
};

export default RouterComponent;
