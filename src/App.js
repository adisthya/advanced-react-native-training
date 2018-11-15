// @flow

import * as React from 'react';
import {Provider} from 'react-redux';
import {View, SafeAreaView} from 'react-native';

import store from './store/createStore';
import Navigation from './screens/NavStack';
type Props = {};
type State = {};
class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <SafeAreaView></SafeAreaView>
          <Navigation />
        </View>
      </Provider>
    );
  }
}

export default App;
