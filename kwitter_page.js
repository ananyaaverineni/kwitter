//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("room_name");

function send(){
msg=document.getElementById("msg").value
firebase.database().ref(room_name).push({
   msg:msg,like:0,name:user_name      
});document.getElementById("msg").value="";
}







function getData() {
firebase.database().ref("/"+room_name).on('value', function(snapshot) {
       document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
               childKey  = childSnapshot.key;
                childData = childSnapshot.val();
                if(childKey != "purpose") {
                  firebase_message_id = childKey;
                   message_data = childData;
                   console.log(message_data)
                   console.log(firebase_message_id)
                   sender_name=message_data['name'];
                   message=message_data['msg'];
                   like=message_data['like']
                   name_with_tag="<h4>"+sender_name+"<img class='user_tick' src='tick.png'></h4>";
                   message_with_tag="<h4 class='message_h4 '>"+ message +"</h4>";
                   like_button="<button class='btn bth-warning' id=' "+ firebase_message_id +"' value='"+like+"' onclick='update_like(this.id)'>";
                   span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> <hr>"
                  row=name_with_tag+message_with_tag+like_button+span_with_tag;
                  document.getElementById("output").innerHTML+=row;
//Start code

//End code
      } });  }); }
getData();
function update_like(message_id){
 likes=document.getElementById(message_id).value
 updated_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({like:updated_likes})

}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
     }