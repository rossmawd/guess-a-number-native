import React from 'react'
import { View, Text, Stylesheet } from 'react-native'

const Header = props => {
  <View>
    <Text>{props.title}</Text>
  </View>
}

const styles = Stylesheet.create({})

export default Header
