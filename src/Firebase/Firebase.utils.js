import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import FirebaseConfig from './Firebase.config';

firebase.initializeApp(FirebaseConfig);