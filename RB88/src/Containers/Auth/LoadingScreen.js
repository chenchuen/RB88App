import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import styles from './Styles';
import ReduxActions from '../../Redux/Actions';

class LoadingScreen extends Component {


  componentWillMount() {
    this.props.appStartUp(true);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.startingUp === false && !nextProps.userData) {
      Actions.LoginScreen();
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>loading screen</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { startingUp } = auth;

  return { startingUp };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appStartUp: (startingUp) =>
      dispatch(ReduxActions.authAppStartUp(startingUp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
