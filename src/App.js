// @flow

import * as React from 'react';
// import {View} from 'react-native';
// import Counter from './screens/Counter/Counter';
import withColor from './screens/Counter/withColor';
import withCounter from './screens/Counter/withCounter';
import CounterComponent from './screens/Counter/CounterComponent';

type Props = {
  counter: number,
  onDecrement: void,
  onIncrement: void,
  randomizeColor: string,
};

function App(props: Props) {
  return <CounterComponent {...props} />;
}

export default withColor(withCounter(App));
