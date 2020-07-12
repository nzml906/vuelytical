import firebase from 'firebase/app';
import firestore from 'firebase/firestore'; // eslint-disable-line no-unused-vars

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAATLfmqqwBkTXxnqmbPUNd7nOi-afqt3M',
  authDomain: 'job-title-tags.firebaseapp.com',
  databaseURL: 'https://job-title-tags.firebaseio.com',
  projectId: 'job-title-tags',
  storageBucket: 'job-title-tags.appspot.com',
  messagingSenderId: '324531096092',
  appId: '1:324531096092:web:84fa0424eeb6bcee6f2dd9',
  measurementId: 'G-ZW5Z0M31YR'
};
// Initialize Firebase
const webJobTags = firebase.initializeApp(firebaseConfig);
// webJobTags.firestore().settings({timestampsInSnapshots: true })
// firebase.analytics();

// export firestore database
export default webJobTags.firestore();
