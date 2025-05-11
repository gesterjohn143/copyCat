import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreed = document.getElementById('terms').checked;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (!agreed) {
        alert('You must agree to the terms and conditions');
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            updateProfile(userCredential.user, { displayName: name });
            alert('Account created successfully!');
            window.location.href = 'login.html';
        })
        .catch((error) => {
            alert('Signup failed: ' + error.message);
        });
});