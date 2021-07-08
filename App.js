import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator()

import LoginScreen from './Screens/LoginScreen'
import RestorePassword from './Screens/RestorePassword'
import RegistrationScreen from './Screens/RegistrationScreen'
import WelcomeScreen from './Screens/WelcomeScreen'
import ChooseAccount from './Screens/ChooseAccount'
import Mapa from './Screens/Mapa'

function MyStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component = {WelcomeScreen} options={{title: ""}} />
      <Stack.Screen name="ChooseAccount" component = {ChooseAccount} options={{title: ""}} />
      <Stack.Screen name="RegistrationScreen" component = {RegistrationScreen} options={{title: "Registrarse en FolloW"}} />
      <Stack.Screen name="LoginScreen" component = {LoginScreen} options={{title: "LogIn en FolloW"}} />
      <Stack.Screen name="RestorePassword" component = {RestorePassword} options={{title: "Restablecer su contraseña"}} />
      <Stack.Screen name="Mapa" component = {Mapa} options={{title: ""}} />
    </Stack.Navigator>
  )
}

export default function Screens() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

function App() {
  
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
           <ChooseAccount />
       </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
       <Mapa />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});