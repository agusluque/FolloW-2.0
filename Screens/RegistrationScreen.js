import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { AuthContext } from '../Database/AuthProvider';
import { useContext } from 'react';

const RegistrationScreen = (props) => {

    function Confirmar () {
        if (password == confirmPassword){
           register(email, password);
        } else {
           alert("las contraseñas no son iguales");
        }
    }

    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const {register} = useContext(AuthContext);

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
            <Button style = {styles.btn} onPress={() => Confirmar()}>
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