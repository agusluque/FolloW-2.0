import React, { useState, useEffect, useContext } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';

import ChooseAccount from '../Screens/ChooseAccount';
import LogOut from '../Screens/Logout';
import { AuthContext } from './Firebase';

const Routes = () => {

    const [user, setUser] = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);
    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) {
            setInitializing (false);
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null; //aca podes poner un loading mientras se loguea

    if (!user) {
       <NavigationContainer>
           <ChooseAccount />
       </NavigationContainer>
    } 
    
    <NavigationContainer>
       <LogOut />
    </NavigationContainer>
}

export default Routes;