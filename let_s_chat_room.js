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
    
    
//ADD YOUR FIREBASE LINKS HERE
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " +user_name+ "!";

function addRoom(){
      room_name=document.getElementById("room_name").value; 

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location= "let_s_chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name" + Room_names); 
      row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id);'> #" + Room_names + "</div><hr>";
      
      document.getElementById("output").innerHTML += row;     
      //End code
      });});}
getData();

function redirect(name){
      console.log(name);

      localStorage.setItem("room_name", name);
      window.location="let_s_chat_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="let_s_chat.html";
}