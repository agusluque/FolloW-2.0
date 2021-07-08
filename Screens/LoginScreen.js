import React, {  useContext, useState } from 'react'
import {View, StyleSheet} from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBYF4htYkN3gDZGS5kRe7Ri3x3fl3uKZ1U",
    authDomain: "follow-bbd.firebaseapp.com",
    projectId: "follow-bbd",
    storageBucket: "follow-bbd.appspot.com",
    messagingSenderId: "904505628152",
    appId: "1:904505628152:web:7aa1a790c74562bbfbf20d"
};
  
firebase.initializeApp(firebaseConfig);

const LoginScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    auth()
  .signInWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });

    return (
        <View> 
            <Button onPress={() => props.navigation.navigate('ChooseAccount')} style = {styles.icon} icon ="chevron-left">
            </Button>
            <TextInput style = {styles.input1}
            label ="Email" 
            mode="outlined"
            
            value={email}
            onChangeText={email => setEmail(email)}
            />
            
            <TextInput style = {styles.input2}
            label="Contraseña"
            secureTextEntry
            mode="outlined"
            
            right={<TextInput.Icon name="eye-off" />}
           
            value={password}
            onChangeText={password => setPassword(password)}
            />
            <Button style= {styles.btn1} onPress={() => auth()}>
            <Text style= {styles.txt1}> Ok </Text> 
            </Button>
            <Button style= {styles.btn2} onPress={() =>props.navigation.navigate('RestorePassword')}>
            <Text style= {styles.txt2}> Forgot Password? </Text> 
            </Button>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        marginRight:300,
    },
    input1:{
        flex:1,
        position: 'absolute',
        width: 300,
        height: 60,
        left: 30,
        top: 110,
        fontSize: 20,
    },
    input2:{ 
        borderRadius: 10,
        width: 300,
        left: 30,
        top: 160,
        fontSize: 20,
        borderColor: 'black'
    },
    btn1:{
        width: 140,
        left: 50,
        top: 180,
        marginLeft: 50,
        backgroundColor: '#7A8CEA',
        borderRadius: 100,
    },
    btn2:{
        width: 250,
        top: 195,
        left: 50,
    },
    txt1:{
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
    },
    txt2:{
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: 15,
    }
})


export default LoginScreen