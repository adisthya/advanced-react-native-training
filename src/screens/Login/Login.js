// @flow

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import {connect} from 'react-redux';
import {Button} from '../../core-ui';
import {WHITE, BLUE_SEA, LIGHT_GREY} from '../../constants/colors';
import Logo from '../../images/logo.png';

type State = {
  email: string;
  password: string;
  activeTextInput: 'EMAIL' | 'PASSWORD' | null;
};

class Login extends Component<*, State> {
  state = {
    email: '',
    password: '',
    activeTextInput: null,
    buttonStyle: {
      backgroundColor: 'blue',
    }
  };

  render() {
    let {email, password, activeTextInput} = this.state;
    return (
      <View style={styles.root}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.header}>
            <Image source={Logo} style={{height: 200}} resizeMode="contain" />
          </View>
          <View>
            <Text>Username or Email</Text>
            <TextInput
              value={email}
              placeholder={this.props.email}
              onChangeText={(email) => this.setState({email})}
              onFocus={() => this._setActiveTextInput('EMAIL')}
              style={[
                styles.textInput,
                activeTextInput === 'EMAIL' && styles.activeTextInput,
              ]}
            />
            <Text>Password</Text>
            <TextInput
              secureTextEntry
              value={password}
              placeholder={this.props.password}
              onChangeText={(password) => this.setState({password})}
              onFocus={() => this._setActiveTextInput('PASSWORD')}
              style={[
                styles.textInput,
                activeTextInput === 'PASSWORD' && styles.activeTextInput,
              ]}
            />
          </View>
          <Button text='SIGN IN' onPress={this._onSubmit} />
        </KeyboardAvoidingView>
      </View>
    );
  }

  _onSubmit = () => {
    const {email, password} = this.state;
    const {login} = this.props;

    if (login) {
      login({email, password}).then((state) => {
        const {token} = this.props;
        if (token) this.props.navigation.navigate('Dashboard');
      });
    }
  }

  _setActiveTextInput(activeTextInput: 'EMAIL' | 'PASSWORD' | null) {
    this.setState({
      activeTextInput,
    });
  }
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 40,
    backgroundColor: WHITE,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  activeTextInput: {
    borderBottomColor: BLUE_SEA,
  },
  textInput: {
    height: 40,
    borderBottomColor: LIGHT_GREY,
    borderBottomWidth: 2,
    marginBottom: 50,
  },
});

const mapStateToProps = (state) => {
  const {login} = state;
  return {
    email: login && login.email,
    password: login && login.password,
    token: login && login.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: async function(payload) {
      return await dispatch({type: 'LOGIN_USER', payload});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
