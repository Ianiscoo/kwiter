var firebaseConfig = {
    apiKey: "AIzaSyCiEQ11SxOyawobQ-AuE8R-JEGwXpz2xmY",
    authDomain: "kwitter-app-952a9.firebaseapp.com",
    databaseURL: "https://kwitter-app-952a9-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-952a9",
    storageBucket: "kwitter-app-952a9.appspot.com",
    messagingSenderId: "962285680436",
    appId: "1:962285680436:web:0d1f876c2556f4e6a21761"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}