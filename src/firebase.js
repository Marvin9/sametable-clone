import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyApp6G1f-Pgxi_3S8CXrl1RdSJMC2un8Z4',
  authDomain: 'sampletable-internship.firebaseapp.com',
  databaseURL: 'https://sampletable-internship.firebaseio.com',
  projectId: 'sampletable-internship',
  storageBucket: 'sampletable-internship.appspot.com',
  messagingSenderId: '673610825687',
  appId: '1:673610825687:web:f130cb77e015678a511592',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
