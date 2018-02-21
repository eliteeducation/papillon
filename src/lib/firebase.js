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
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;

    } else {

    }
});


export const clients =  firebase.database().ref("clients");
export const enseignants =  firebase.database().ref("enseignants");
export const eleves =  firebase.database().ref("eleves");
export const matieres =  firebase.database().ref("matieres");
export const etablissements =  firebase.database().ref("etablissements");
export const rendezVous =  firebase.database().ref("rendezVous");
export const partenaires =  firebase.database().ref("partenaires");