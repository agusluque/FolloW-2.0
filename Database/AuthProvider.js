import React, { createContext, useState } from 'react';
import firebase from 'firebase';
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

 