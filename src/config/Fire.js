import firebase from 'firebase';

const config = { 
    apiKey: "AIzaSyB0n5BqWnpSi76FonWpwjd7ZaEZig4-Ngc",
    authDomain: "projectlixa.firebaseapp.com",
    databaseURL: "https://projectlixa.firebaseio.com",
    projectId: "projectlixa",
    storageBucket: "projectlixa.appspot.com",
    messagingSenderId: "864842625759",
    appId: "1:864842625759:web:3c6f3a7f19625c43ad2f6a",
    measurementId: "G-QYYXESE38H"

};
const fire = firebase.initializeApp(config);
export default fire;