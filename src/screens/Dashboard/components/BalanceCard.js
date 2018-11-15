// @flow

import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import numeral from 'numeral';

import {WHITE} from '../../../constants/colors';

type BalanceCardProps = {
  title: string;
  amount: string;
  color: string;
  onPress: Function;
  type: 'EXPENSE' | 'INCOME';
};

export default function BalanceCard(props: BalanceCardProps) {
  let {title, amount, color, onPress, type} = props;

  return (
    <View
      style={[
        balanceCardStyles.card,
        {
          backgroundColor: color,
        },
      ]}
    >
      <TouchableOpacity onPress={() => onPress(type)}>
        <Text style={{fontSize: 16, color: WHITE}}>{title}</Text>
        <Text style={{fontSize: 22, color: WHITE}}>{numeral(amount).format('$0,0.00')}</Text>
      </TouchableOpacity>
    </View>
  );
}

let balanceCardStyles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    margin: 5,
    borderRadius: 5,
  },
});
