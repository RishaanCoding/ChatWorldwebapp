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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
    var msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("message").value = "";
}


function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace =("index.html");
}





var test1;
test1 = 10;
function abc() {
    test1 = 3;
}

abc()

console.log(test1);