import React, { useContext } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions} from 'react-native';
import { Button } from 'react-native-paper';
import { AuthContext } from '../Database/AuthProvider';


function Mapa(props) {

  //const {user, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={{
        latitude: -34.532295,
        longitude: -58.51391,
        latitudeDelta: 0.0400,
        longitudeDelta: 0.0250,
      }}
      provider="google"
      >
      </MapView>
      {/* <Button onPress={() => logout()}> */}
      <Button onPress={() => props.navigation.navigate('WelcomeScreen')}>
        Log Out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginBottom:50,
    flex: 1
  },
});


export default Mapa