
var firebaseConfig = {
  apiKey: "AIzaSyDJMDx1fIH2vn2UVpP14VnL56yc9cCkCSI",
    authDomain: "project1-823d8.firebaseapp.com",
    projectId: "project1-823d8",
    storageBucket: "project1-823d8.appspot.com",
    messagingSenderId: "384099328787",
    appId: "1:384099328787:web:28eb326a3130f220a7f0e6"
  };

  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth()
  function signUpUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
        // User is signed up
        var user = userCredential.user;
        console.log('User signed up:', user);
        console.log('User details:', user.toJSON());
        alert('Sign-up successful!');
      })
  .catch((error) => {
        // An error occurred while signing up the user
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Error signing up user:', errorCode, errorMessage);
      });
  }
  
  document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    var email = document.querySelector('#emailid').value;
    var password = document.querySelector('#password').value;
    signUpUser(email, password);
  });