import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

function Card({ children, style }) {
    const { width, height } = useWindowDimensions();
    const marginWidthDistance = height < 380 ? 5 : 10
    return (
        <View style={[styles.card, { marginTop: marginWidthDistance }, style]}>{children}</View>
    )
}

export default Card

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        // marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, hieght: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },
})