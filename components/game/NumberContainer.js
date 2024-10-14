import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

import Colors from '../../constants/colors'

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numbertext}>{children}</Text>
        </View>
    );
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accesnt500,
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        margin: deviceWidth < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numbertext: {
        color: Colors.accesnt500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontWeight: 'bold',
    },
})