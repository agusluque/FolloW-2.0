import * as React from 'react'
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

const ChooseAccount = (props) => {
    return (
        <View style = {styles.container}>
           <Button onPress={() => props.navigation.navigate('WelcomeScreen')} style = {styles.icon} icon ="chevron-left">
            </Button>
            <Button style= {styles.btns} mode="contained" onPress={() => props.navigation.navigate('RegistrationScreen')}>
            <Text style= {styles.txt}>Create an account!</Text>
            </Button>
            <Button style= {styles.btns} mode="contained" onPress={() => props.navigation.navigate('LoginScreen')}>
            <Text style= {styles.txt}>Already have an account?</Text>
            </Button>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    btns:{
        width : 310,
        height: 218,
        top: 20,
        left: 10,
        borderRadius: 1,
        margin: 15,
        backgroundColor:'#DEDEDE',
        borderRadius: 20,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    txt:{
        width: '100%',
        height: '100%',
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
    },
    icon:{
        marginRight:300,
    }
})

export default ChooseAccount