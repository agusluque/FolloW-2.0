import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const WelcomeScreen = (props) => {
    return (
        <View style = {styles.container}>
        <Text>
        <Text style= {styles.title}> Welcome to FolloW </Text>
        </Text>
        <Button style = {styles.btn} onPress={() => props.navigation.navigate('ChooseAccount')}>
        <Text style = {styles.textBtn}> Get Started! </Text>
        </Button>
        </View>
    )
}
const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
        },
        btn:{
            position: 'absolute',
            width: 250,
            height: 70,
            left: 50,
            top: 400,
            backgroundColor: '#7A8CEA',
            borderRadius: 70,  
        },
        title:{
            position: 'absolute',
            fontWeight: 'bold',
            fontSize: 35,
            alignItems: 'center',
        },
        textBtn:{
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 50,
            textAlign: 'center',
            color: 'black',
            fontSize: 17,
        }
    })




export default WelcomeScreen