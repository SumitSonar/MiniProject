var firebaseConfig = {
  apiKey: "AIzaSyDJMDx1fIH2vn2UVpP14VnL56yc9cCkCSI",
  authDomain: "project1-823d8.firebaseapp.com",
  projectId: "project1-823d8",
  storageBucket: "project1-823d8.appspot.com",
  messagingSenderId: "384099328787",
  appId: "1:384099328787:web:28eb326a3130f220a7f0e6"
};
  firebase.initializeApp(firebaseConfig);
  function logInUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
      // User is logged in
      var user = userCredential.user;
      console.log('User logged in:', user);
      alert('Login successful!');
      window.location.href = 'dashboard.html';
    })
  .catch((error) => {
      // An error occurred while logging in the user
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Error logging in user:', errorCode, errorMessage);
    });
  }
  
  document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    var email = document.querySelector('#emailid').value;
    var password = document.querySelector('#password').value;
    logInUser(email, password);
});