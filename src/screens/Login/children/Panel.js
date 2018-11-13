// @flow

import * as React from 'react';
import {View} from 'react-native';

import PanelHeader from './PanelHeader';

type Props = {
  header: string,
  body: string,
  footer: string,
};

function Panel(props: Props) {
  return (
    <View>
      <PanelHeader title="Welcome" />
      <View>{props.body}</View>
      <View>{props.footer}</View>
    </View>
  );
}

export default Panel;
