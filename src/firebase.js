// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2023, 1, 8);
//     }
//   }
// }

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {firebase} from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBK5ak_H7xapmFsBUM8wonT0jmWDHyHZZM",
        authDomain: "fb-messenger-clone-c43ef.firebaseapp.com",
        projectId: "fb-messenger-clone-c43ef",
        storageBucket: "fb-messenger-clone-c43ef.appspot.com",
        messagingSenderId: "854542354268",
        appId: "1:854542354268:web:b8ca44e6f5e9827639a399",
        measurementId: "G-GQKE1S8R3F"
});

const db = firebaseApp.firestore();
export default db;