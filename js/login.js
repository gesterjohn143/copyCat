import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

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
const database = getDatabase(app);

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const userId = userCredential.user.uid;
            const userRef = ref(database, 'users/' + userId);

            // Check if user data exists in the database
            get(userRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        // User data exists, redirect to usersaved.html
                        window.location.href = 'usersaved.html';
                    } else {
                        // No user data, redirect to user.html for profile setup
                        window.location.href = 'user.html';
                    }
                })
                .catch((error) => {
                    console.error('Error checking user data:', error);
                    alert('An error occurred. Please try again.');
                });
        })
        .catch((error) => {
            alert('Login failed: ' + error.message);
        });
});