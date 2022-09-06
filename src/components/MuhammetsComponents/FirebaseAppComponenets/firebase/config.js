import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD81833iKgPX0s_6oZd-CexGSDfGLog31Y",
    authDomain: "galeriuygulamasi.firebaseapp.com",
    projectId: "galeriuygulamasi",
    storageBucket: "galeriuygulamasi.appspot.com",
    messagingSenderId: "1043085007005",
    appId: "1:1043085007005:web:79e12b9708df9caed25c74"
  };
  
firebase.initializeApp(firebaseConfig);


const depo =firebase.storage();
const veritabani =firebase.firestore();

const tarih =fireabase.firestore.FieldValue.serverTimesramp;

export{
    depo,
    veritabani,
    tarih
}