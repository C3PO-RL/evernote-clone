import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAlRVNplx8aoL9Y4cgmU3WaytM9TftFwXU',
  authDomain: 'evernote-clone-adaf1.firebaseapp.com',
  projectId: 'evernote-clone-adaf1',
  storageBucket: 'evernote-clone-adaf1.appspot.com',
  messagingSenderId: '636513666906',
  appId: '1:636513666906:web:7d76ab997db239f4a51563',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
