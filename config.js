import firebase from "firebase";

//initialize your database
  const firebaseConfig = {
    apiKey: "AIzaSyByW6Irnb4PdAuI-UNeNNLWaYVmKIRvQjI",
    authDomain: "pro60-b4a9b.firebaseapp.com",
    databaseURL: "https://pro60-b4a9b-default-rtdb.firebaseio.com",
    projectId: "pro60-b4a9b",
    storageBucket: "pro60-b4a9b.appspot.com",
    messagingSenderId: "875418119355",
    appId: "1:875418119355:web:cace825100121673e4cd9e",
    measurementId: "G-C44H99LH68"
  };

  
  if(!firebase.apps.length){ 
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase.database()
 

  