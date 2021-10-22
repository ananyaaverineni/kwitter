// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCqRKKv_xChOw2fGsD72is8FfOdhVxV8mc",
      authDomain: "whatsapp-7ef83.firebaseapp.com",
      databaseURL: "https://whatsapp-7ef83-default-rtdb.firebaseio.com",
      projectId: "whatsapp-7ef83",
      storageBucket: "whatsapp-7ef83.appspot.com",
      messagingSenderId: "386979290704",
      appId: "1:386979290704:web:4708409db6ff595d047b55"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
console.log("user_name="+user_name )
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
  function addroom ()
  {
    room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"});
     localStorage.setItem("room_name",room_name);
     window.location="kwitter_page.html";
  }
  console.log("Ananya is cool")
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
 Room_names = childKey;
      //Start code
     row="<div class='room_name' id='"+Room_names+"' onclick=redirectToRoomname(this.id)>"+Room_names+"</div> <hr>";
      console.log(row);
      document.getElementById("output").innerHTML+=row;
     //End code
      });});}
getData();
function redirectToRoomname(name)
{
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
 function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location="index.html"
 }