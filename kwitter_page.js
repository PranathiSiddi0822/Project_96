// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCaueN1l2VdKzf2_lQ92eazNEW33T1rHdo",
    authDomain: "project-95-b5f04.firebaseapp.com",
    databaseURL: "https://project-95-b5f04-default-rtdb.firebaseio.com",
    projectId: "project-95-b5f04",
    storageBucket: "project-95-b5f04.appspot.com",
    messagingSenderId: "450205680934",
    appId: "1:450205680934:web:0a90b9e9711559e6982de7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
  }

  function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          messgae:msg,
          likes:0,
          dislikes:0
      });

      document.getElementById("msg").value="";
  }