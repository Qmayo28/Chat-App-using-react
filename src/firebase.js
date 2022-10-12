import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCLG_OTv2CNbUryuwrJTs_aQWAf9c56TJE',
  authDomain: 'chat-f1a3d.firebaseapp.com',
  projectId: 'chat-f1a3d',
  storageBucket: 'chat-f1a3d.appspot.com',
  messagingSenderId: '452543074559',
  appId: '1:452543074559:web:10fbb49ce0f13c6caf3cca',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
