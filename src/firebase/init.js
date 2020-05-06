import firebase from 'firebase/app';
import firestore from 'firebase/firestore'; // eslint-disable-line no-unused-vars

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
};
// Initialize Firebase
const webJobTags = firebase.initializeApp(firebaseConfig);
// webJobTags.firestore().settings({timestampsInSnapshots: true })
// firebase.analytics();

// export firestore database
export default webJobTags.firestore();
