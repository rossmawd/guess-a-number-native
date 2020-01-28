import React from 'react'
import { View, StyleSheet } from 'react-native'



// make a new card componet
// make styles object and import stylesheet
const Card = props => {

  return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
}

//he appears to be making a 'wrapper'
//using the {props.children} property within a View so that the wrapper's styling can be applied to whatever is inside!

//certain styles should not be set from inside of the card
//e.g not every card should have a maxWidth and not every card should center its content
//SO, we want to be able to assign our own styles from outside, and maybe
// even override the styles!
// to do this pass in a new object into the style prop and spread the style peoperty into it
// THEN also spread the style prop you have passed into Card... as you have
// done this second it will override any existing style properties

const styles = StyleSheet.create({
  card: {
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

export default Card