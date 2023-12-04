// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyB6z7uQkJi2cT0WIVAIFHL_NAoRjrq2boI",
      authDomain: "chatworldwebapp.firebaseapp.com",
      databaseURL: "https://chatworldwebapp-default-rtdb.firebaseio.com",
      projectId: "chatworldwebapp",
      storageBucket: "chatworldwebapp.appspot.com",
      messagingSenderId: "667843923015",
      appId: "1:667843923015:web:1f4d1d0d0777d1515b7562",
      measurementId: "G-5LB5L3KX65"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name_span").innerHTML = user_name;

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value',
      function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;

//End code
});});}
getData();

function redirectToRoomName (name)
{
      localStorage.setItem("room_name", name);
      console.log(name);
      window.location = "kwitter_page.html";
}

function logout()
{
    window.location = "index.html";
}