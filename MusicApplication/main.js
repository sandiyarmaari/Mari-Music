  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAuth,GoogleAuthProvider,signInWithPopup  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyCAYobtJ98HtqeJ0mFVEylMrjAZt7qTHeA",
    authDomain: "mari-music.firebaseapp.com",
    projectId: "mari-music",
    storageBucket: "mari-music.appspot.com",
    messagingSenderId: "242807485683",
    appId: "1:242807485683:web:c1d444467db071d2c37386"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();

  const google = document.getElementById("gbtn");
  google.addEventListener("click",function()
{
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    sessionStorage.setItem('userEmail', user.email); // Store user email in session storage

    console.log(user);
    window.location.href="home.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
  });   
})


// const facebook = document.getElementById("fbtn");
// facebook.addEventListener("click",function()
// {
//     signInWithPopup(auth, provider)
//   .then((result) => {
//     // The signed-in user info.
//     const user = result.user;

//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     const credential = FacebookAuthProvider.credentialFromResult(result);
//     console.log(user);
//     window.location.href="home.html";
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
   

//     // ...
//   });

// })