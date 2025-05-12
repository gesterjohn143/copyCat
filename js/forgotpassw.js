import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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

document.getElementById('resetForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('resetEmail').value;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert('Password reset email sent!');
      window.location.href = 'login.html';
    })
    .catch((error) => {
      alert('Error: ' + error.message);
    });
});