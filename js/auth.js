// auth.js

// Authentication state management
let isAuthenticated = false;
let user = null;

function setAuthState(authState, userData) {
    isAuthenticated = authState;
    user = userData;
    updateUI();
}

// Google sign-in function
function googleSignIn() {
    // Logic for Google sign-in
    // Simulating successful sign-in
    const userData = { name: 'Google User', email: 'user@example.com' };
    setAuthState(true, userData);
}

// Email/password authentication
async function emailSignIn(email, password) {
    // Simulate API call for email/password sign-in
    if (email === 'user@example.com' && password === 'password123') {
        const userData = { name: 'Email User', email: email };
        setAuthState(true, userData);
    } else {
        alert('Invalid email or password');
    }
}

// Update UI based on authentication state
function updateUI() {
    const authStatus = document.getElementById('auth-status');
    if (isAuthenticated) {
        authStatus.innerHTML = `Logged in as ${user.name}`;
    } else {
        authStatus.innerHTML = 'Not logged in';
    }
}

// Export functions for use in other modules
export { googleSignIn, emailSignIn, setAuthState };