import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const RegistrationScreen = (props) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    auth()
  .createUserWithEmailAndPassword(email, password)
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
            <Button style = {styles.icon} onPress={() => props.navigation.navigate('ChooseAccount')} icon="chevron-left">
            </Button>
            <TextInput style = {styles.input1}
            label="Nombre"
            mode="outlined"
            value={name}
            onChangeText={name => setName(name)}
            />
             <TextInput style = {styles.input2}
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={email => setEmail(email)}
            />
             <TextInput style = {styles.input3}
            label="Contraseña"
            mode="outlined"
            secureTextEntry
            value={password}
            onChangeText={password => setPassword(password)}
            />
            <TextInput style = {styles.input4}
            label="Confirmar Contraseña"
            mode="outlined"
            secureTextEntry
            value={confirmPassword}
            onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
            />
            <Button style = {styles.btn} onPress={() => auth()}>
            <Text style = {styles.txt}> Ok </Text>  
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
    icon:{
        marginRight:300,
    },
    input1:{
        fontSize: 20,
        width: 300,
        left: 30,
        height: 60,
        top: 5,
        
    },
    input2:{
        fontSize: 20,
        width: 300,
        left: 30,
        height: 60,
        top: 10,

    },
    input3:{
        fontSize: 20,
        width: 300,
        left: 30,
        height: 60,
        top: 20,
    },
    input4:{
        fontSize: 20,
        width: 300,
        left: 30,
        height: 60,
        top: 30,
    },
    btn:{
        top: 50,
        width: 140,
        left: 95,
        backgroundColor: '#7A8CEA',
        borderRadius: 40,
    },
    txt:{
        fontSize: 20,
        color: 'black'
    }

})

export default RegistrationScreen