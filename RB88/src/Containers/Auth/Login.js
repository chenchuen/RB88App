import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import TextField from 'react-native-md-textinput';

import ReduxActions from '../../Redux/Actions';
import styles from './Styles';

class LoginScreen extends Component {
  constructor(props) {
      super(props);

      this.state = {
        username: '',
        password: '',
      };
  }

  _handleTextChanged = (text, property) => {
    this.setState({
      [property]: text
    });
  }

  _handleLoginPlayer = () => {
    const credential = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.LoginPlayer(credential);
  }

  render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Login Screen</Text>
          <TextField
            label={'Name'}
            highlightColor={'#00BCD4'}
            keyboardType={'default'}
          />
        </View>
      );
    }
}

const mapStateToProps = state => ({
    login_state: state.LoginReducer
});

export function mapDispatchToProps(dispatch) {
    return {
        userLogin: (email, password) => () => {
            dispatch(ReduxActions.authLoginAttempt(email, password));
        },
        dispatch,
    };
}

const login = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export default login;
