import * as React from 'react'
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { AuthContext } from '../Database/Firebase';

const LogOut = (props) => {

    const {user, logout} = React.useContext(AuthContext);

    return (
        <View>
            <Button onPress={() => logout()}>
            Log Out
            </Button>
        </View>
    )
}

export default LogOut