// @flow

import * as React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/styles';

type Props = {
  title: string,
};

function PanelHeader(props: Props) {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

export default PanelHeader;
