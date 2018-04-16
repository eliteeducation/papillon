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

        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        const providerData = user.providerData;

    } else {

    }
});


export const clients =  firebase.database().ref("clients");
export const enseignants =  firebase.database().ref("enseignants");
export const students =  firebase.database().ref("students");

export const etablissements =  firebase.database().ref("etablissements");
export const rendezVous =  firebase.database().ref("rendezVous");
export const partenaires =  firebase.database().ref("partenaires");


//Ref data : quartier, matieres,
export const refData =  firebase.database().ref("refData");

//export const matieres =  firebase.database().ref("matieres");

export const TypeMatiere = {
    TECHNIQUE: 'TECHNIQUE',
    SCIENTIFIQUE: 'SCIENTIFIQUE',
    LITTERAIRE: 'LITTERAIRE'
}

export const saveClient = (data)=>{
    return clients.push(data).key;
}
export const saveStudent  = (clientId, studentData)=>{
    if(clientId) {
        studentData.parentId = clientId;
        firebase.database().ref("clients/" + clientId).once('value',snap=>{
            studentData.parentName=   snap.val().lastName + " " + snap.val().firstName;
            studentData.commune=   snap.val().commune;
        });
        firebase.database().ref("clients/" + clientId + "/students").push(studentData);
    }
    students.push(studentData)
}


//TODO gerer ces données ne BDD
export const matieres= [
    {
        value: 'Mathématique',
        code: 'math',
        type:TypeMatiere.SCIENTIFIQUE

    },
    {
        value: 'Physique',
        code: 'phys',
        type:TypeMatiere.SCIENTIFIQUE
    },
    {
        value: 'Histoire Géo',
        code: 'histg',
        type:TypeMatiere.LITTERAIRE
    },
    {
        value: 'Anglais',
        code: 'angl',
        type:TypeMatiere.LITTERAIRE
    },
    {
        value: 'Français',
        code: 'fran',
        type:TypeMatiere.LITTERAIRE
    },
    {
        value: 'Phylosophie',
        code: 'phylo',
        type:TypeMatiere.LITTERAIRE
    },
    {
        value: 'SVT',
        code: 'svt',
        type:TypeMatiere.SCIENTIFIQUE
    },
    {
        value: 'Comptabilité',
        code: 'compt',
        type:TypeMatiere.TECHNIQUE
    },
    {
        value: 'Espagnol',
        code: 'espa',
        type:TypeMatiere.LITTERAIRE
    }
]
export const communes = [
    {
        key: '46465',
        nom:"Koumassi",
        quartiers:["Remblais", "Sopim", "Prodomo","05","Sogephia","Marché","Camp Commando"]
    },
    {
        key:'Cocody',
        nom:"Cocody",
        quartiers:["Angré VII", "Angré Chateaux", "2 Plateaux", "Danga","Riviera Golf","Roviera II","Riviera III","Riviera Faya"]
    },
    {
        key:'Yopougon',
        nom:"Yopougon",
        quartiers:["Remblais", "Sopim", "Prodomo","05","Sogephia","Marché","Camp Commando"]
    },
    {
        key:'Marcory',
        nom:"Marcory",
        quartiers:["Remblais", "Sainte-Thérèse", "Zone 4","Hibiscus","zone 3","Bietry","Résidentiel","Socogi"]
    },
    {
        key:'Treichville',
        nom:"Treichville",
        quartiers:["Remblais", "Sopim", "Prodomo","05","Sogephia","Marché","Camp Commando"]
    },
]