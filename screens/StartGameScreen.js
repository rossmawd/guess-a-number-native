import React from 'react'
import { View, StyleSheet, Text } from 'react-native';


const StartGameScreen = props => {
  return (
    <View>
      <Text>This is the Game Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'centre',
  }
})

export default StartGameScreen


// puts a screen value into the styles objet
  // flex should be 1
  // padding 10
  // alignItems centre
  // justify content is default (flex start)
  //impot this into app and put into App.js