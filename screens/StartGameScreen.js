import React from 'react'
import { View, StyleSheet, Button, Text, TextInput } from 'react-native';


const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />>
       <View style={styles.buttonContainer}>
          <Button title='reset' onPress={() => { }} />
          <Button title='confirm' onPress={() => { }} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {

  },
  inputContainer: {

  },
  buttonContainer: {

  }
})

export default StartGameScreen


 //add all styles to styles
 // for title:
  // fontSize is 20
  //marginVertical 10

  //buttonContainer  should have:
    // flexDirection: row
    //width 100%
    //justifyContent space-betweeen
    //paddingHorizontal 15

