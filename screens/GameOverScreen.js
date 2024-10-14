import { StyleSheet, View, Image, Text, useWindowDimensions, ScrollView } from 'react-native'
import React from 'react'

import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import PrimaryButton from '../components/ui/PrimaryButton'

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;
    if (width < 380) {
        imageSize = 150;
    }

    if (height < 450) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }
    return (
        <ScrollView style= {{flex: 1}}>
            <View style={styles.rootContainer}>
                <Title>Game is Over!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/success.png')} />
                </View>
                <Text style={styles.text}><Text style={styles.highlight}>{roundsNumber}</Text> rounds needed to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View >
        </ScrollView>
    )
}

export default GameOverScreen

// const {deviceHeight} = Dimensions.get('window').height;
// const deviceWidth = Dimensions.get('window').width;



const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        // borderRadius: deviceWidth < 400 ? 75 : 150,
        // width: deviceWidth < 400 ? 150 : 300,
        // height: deviceWidth < 400 ? 150 : 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        color: Colors.primary500,
        fontSize: 25,
    }
})