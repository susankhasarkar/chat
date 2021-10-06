const firebaseConfig = {
    apiKey: "AIzaSyCiclwcyXhBef-JkzmR7s-9pT3bsvHOwOU",
    authDomain: "kwitter-aka-twitter.firebaseapp.com",
    databaseURL: "https://kwitter-aka-twitter-default-rtdb.firebaseio.com",
    projectId: "kwitter-aka-twitter",
    storageBucket: "kwitter-aka-twitter.appspot.com",
    messagingSenderId: "449282062983",
    appId: "1:449282062983:web:8c179290105233a15f9622",
    measurementId: "G-H9XH3PNHD5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
