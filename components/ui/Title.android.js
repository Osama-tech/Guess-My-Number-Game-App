import { StyleSheet, Text, View, useWindowDimensions, Platform } from 'react-native'
import React from 'react'

import Colors from '../../constants/colors'


function Title({ children }) {

  const { width, height } = useWindowDimensions();
  const marginTopDistance = height < 800 ? 12 : 20
  return (
    <View>
      <Text style={[styles.title, { marginTop: marginTopDistance }]}>{children}</Text>
    </View>
  )
}

export default Title



// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: Colors.accesnt500,
    padding: 12,
    maxWidth: '80%',
    width: 300,
    // marginTop: deviceHeight < 800 ? 18 : 30
  }
})