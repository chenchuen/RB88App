import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import ReduxActions from '../../Redux/Actions';
import styles from './Styles';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Login Screen</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
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
            dispatch(ReduxActions.setLoginAttempt(email, password));
        },
        dispatch,
    };
}

const login = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export default login;
