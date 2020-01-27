import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Here is the title bar"></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
