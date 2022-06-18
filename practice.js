var firebaseConfig = {
    apiKey: "AIzaSyAx9zynsFpK3q4HBlhHfyruP7dGAuKUggY",
    authDomain: "practice-activity-85802.firebaseapp.com",
    databaseURL: "https://practice-activity-85802-default-rtdb.firebaseio.com",
    projectId: "practice-activity-85802",
    storageBucket: "practice-activity-85802.appspot.com",
    messagingSenderId: "74430222511",
    appId: "1:74430222511:web:0625d54ab35db64bdc445a"
  };
  
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}