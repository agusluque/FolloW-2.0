import React from 'react'
import { View, Text, StyleSheet} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const RestorePassword = (props) => {

    const [nuevaCon, setNuevaCon] = React.useState('');
    const [confirmarNuevaCon, setConfirmarNuevaCon] = React.useState('');

    return (
        <View>
            <Button style= {styles.icon} onPress={() => props.navigation.navigate('LoginScreen')} icon="chevron-left">
            </Button>
            <TextInput style = {styles.input1}
            label="Nueva Contraseña"
            secureTextEntry
            mode="outlined"
            value={nuevaCon}
            onChangeText={nuevaCon => setNuevaCon(nuevaCon)}
            />
            <TextInput style = {styles.input2}
            label="Confirmar nueva contraseña"
            secureTextEntry
            mode="outlined"
            value={confirmarNuevaCon}
            onChangeText={confirmarNuevaCon => setConfirmarNuevaCon(confirmarNuevaCon)}
            />
            <Button style = {styles.btn}   >
              <Text style = {styles.txt} > Actualizar </Text>  
            </Button>
        </View>
    )
}
const styles = StyleSheet.create ({
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
    },
    btn:{
        width: 200,
        left: 25,
        top: 180,
        marginLeft: 50,
        backgroundColor: '#7A8CEA',
        borderRadius: 100,
    }, 
    txt:{
        color: 'black',
        fontSize: 20,
    }

})

export default RestorePassword