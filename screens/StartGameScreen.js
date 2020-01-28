import React from 'react'
import { View, StyleSheet, Button, Text, TextInput } from 'react-native';


const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
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
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20

  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
})

export default StartGameScreen


// shadowColor: black
// shadowOffset
  // takes an object 
    // see the Native docs
    // inside this give width 0 and height 2
//shadowRadius 6  (set to 0 if you only eant the shadow to appear according to the offset)
//shadowOpacity 0.26
//elevation 8    --ONLY works on Android
//background Color: white

//to stop items from sitting on the edges of the card use padding
  //padding 20
  //borderRadius