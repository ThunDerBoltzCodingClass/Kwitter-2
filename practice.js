const firebaseConfig = {
    apiKey: "AIzaSyCuRp-paWoL9au_MVO6Uw7iYSBdHrJeEEI",
    authDomain: "practicekwitter-a5e22.firebaseapp.com",
    databaseURL: "https://practicekwitter-a5e22-default-rtdb.firebaseio.com",
    projectId: "practicekwitter-a5e22",
    storageBucket: "practicekwitter-a5e22.appspot.com",
    messagingSenderId: "1033551260104",
    appId: "1:1033551260104:web:0995fce1f527f49292b8fd"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name= document.getElementById("username").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: "adding user"
      });
  }