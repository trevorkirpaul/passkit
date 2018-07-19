import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Wallet from 'react-native-wallet';
const PASS = require('./passdata/StoreCard.pkpass')

export default class App extends React.Component {
  handleAddToWallet() {
    // Wallet.showAddPassControllerFromFile()
    console.log(PASS)
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Add To Wallet" onPress={this.handleAddToWallet} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
