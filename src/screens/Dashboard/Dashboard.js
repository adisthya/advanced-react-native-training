// @flow

import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

import TransactionCard from './components/TransactionCard';
import BalanceCard from './components/BalanceCard';
import {BLUE_SEA, RED} from '../../constants/colors';
import type {Transaction} from '../../types/index';

type Props = {
  transactionList: Array<Transaction>;
};

class Dashboard extends Component<Props, *> {

  static navigationOptions = {
    title: 'Transactions',
    headerStyle: {backgroundColor: '#4CAF50'},
    headerTintColor: '#ffffff',
  };

  render() {
    const {filterTransactions} = this.props;

    return (
      <View style={{padding: 10, flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <BalanceCard title="Income" amount={this._countTransactionsAmountGroups('INCOME')} onPress={filterTransactions} type="INCOME" color={BLUE_SEA} />
          <BalanceCard title="Expense" amount={this._countTransactionsAmountGroups('EXPENSE')} onPress={filterTransactions} type="EXPENSE" color={RED} />
        </View>
        <View style={{marginTop: 15, flex: 1}}>
          <Text style={{marginBottom: 5, fontSize: 16}}>History</Text>
          <FlatList
            data={this.props.transactionList}
            renderItem={({item}) => <TransactionCard {...item} />}
            keyExtractor={({id}) => id}
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  _countTransactionsAmountGroups(trxType: 'EXPENSE' | 'INCOME') {
    return this.props.transactionList.reduce((total: number, trx: Transaction) => {
      if(trx.type === trxType) total += trx.amount;
      return total;
    }, 0.0);
  }
}

const mapStateToProps = (state: *) => {
  return {
    transactionList: state.transaction,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterTransactions: (data: 'EXPENSE' | 'INCOME') => {
      let payload = {data};
      dispatch({type: 'FILTER_TRANSACTION', payload});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
