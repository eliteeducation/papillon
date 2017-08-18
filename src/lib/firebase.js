/**
 * Created by emma on 18/08/17.
 */

import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCe10qhLv_-f348imnBoz3uQXNt6KAPGds",
    authDomain: "papillon-ad8fa.firebaseapp.com",
    databaseURL: "https://papillon-ad8fa.firebaseio.com",
    projectId: "papillon-ad8fa",
    storageBucket: "papillon-ad8fa.appspot.com",
    messagingSenderId: "17500589997"
};
firebase.initializeApp(config);


export const prospects = firebase.database().ref("propsects");