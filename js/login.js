import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA7zC2xkGU7VZu7iLnSBhv4n8EZnHrzJFw",
    authDomain: "copycat-d3561.firebaseapp.com",
    projectId: "copycat-d3561",
    storageBucket: "copycat-d3561.firebasestorage.app",
    messagingSenderId: "201940334771",
    appId: "1:201940334771:web:5d68712667c8a5526a58c6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successful login
            window.location.href = 'user.html';
        })
        .catch((error) => {
            alert('Login failed: ' + error.message);
        });
});