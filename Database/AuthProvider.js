import firebase from 'firebase';
import * as React from 'react'
import auth from '@react-native-firebase/auth';
import { createContext, useState } from 'react';

var firebaseConfig = {
    apiKey: "AIzaSyBYF4htYkN3gDZGS5kRe7Ri3x3fl3uKZ1U",
    authDomain: "follow-bbd.firebaseapp.com",
    projectId: "follow-bbd",
    storageBucket: "follow-bbd.appspot.com",
    messagingSenderId: "904505628152",
    appId: "1:904505628152:web:7aa1a790c74562bbfbf20d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
        value = {{
            user,
            setUser,
            login: async (email, password) => {
                try {
                    await auth().signInWithEmailAndPassword(email, password);
                } catch (error){
                    console.log(error);
                }
            },
            register: async (email, password) => {
                try {
                    await auth().createInWithEmailAndPassword(email, password);
                } catch (error){
                    console.log(error);
                }
            },
            logout: async () => {
                try {
                    await auth().signOut();
                } catch (error){
                    console.log(error);
                }
            },
        }}
        >
        {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider 