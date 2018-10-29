import firebase from 'firebase'
import { AsyncStorage } from 'react-native'

const config = {
  apiKey: "AIzaSyAt3aJvXdC79vGfvpH6CrNrcaTAlLE2FUo",
  authDomain: "sjpeserver.firebaseapp.com",
  databaseURL: "https://sjpeserver.firebaseio.com",
  projectId: "sjpeserver",
  storageBucket: "sjpeserver.appspot.com",
  messagingSenderId: "772928320344"
};

firebase.initializeApp(config);
let firebaseAuth = firebase.auth()
export { firebaseAuth }