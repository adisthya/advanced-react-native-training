// @flow

import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles/styles';

type Props = {};

// eslint-disable-next-line
function LoginScreen(props: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Username" />
      </View>
      <View>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Password"
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;
