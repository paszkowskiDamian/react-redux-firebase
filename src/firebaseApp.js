import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDCE8t4fWlXrBPZKbp5IODGNdi6JhYAoCY",
    authDomain: "damian-paszkowski.firebaseapp.com",
    databaseURL: "https://damian-paszkowski.firebaseio.com",
    projectId: "damian-paszkowski",
    storageBucket: "damian-paszkowski.appspot.com",
    messagingSenderId: "87350351560"
};

export const firebaseApp = firebase.initializeApp(config)