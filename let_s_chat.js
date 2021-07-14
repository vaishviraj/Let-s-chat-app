var firebaseConfig = {
  apiKey: "AIzaSyCKbuFPyVRDzvOQlc7yni81w8-dWGVhFBI",
  authDomain: "let-s-chat-app-project.firebaseapp.com",
  databaseURL: "https://let-s-chat-app-project-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-app-project",
  storageBucket: "let-s-chat-app-project.appspot.com",
  messagingSenderId: "519706036797",
  appId: "1:519706036797:web:312d44c1d20097821e7854"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="let_s_chat_room.html"; 
}