import Firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDsoKzmjksW1U5Wut7xX7b4twpK9iBz71E",
  authDomain: "notevuek-jung.firebaseapp.com",
  databaseURL: "https://notevuek-jung.firebaseio.com",
  projectId: "notevuek-jung",
  storageBucket: "",
  messagingSenderId: "523981425538"
};

const app = Firebase.initializeApp(config)
const db = app.database()
const notesRef = db.ref('notes')

export default { app, db, notesRef }
