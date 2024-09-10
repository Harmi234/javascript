document.addEventListener('DOMContentLoaded', function () {
    const authButton = document.getElementById('auth-button');
    const loginModal = new bootstrap.Modal(document.getElementById('login-modal'));
  
    // Check if the user is logged in
    function updateButtonText() {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      authButton.textContent = isLoggedIn ? 'Logout' : 'Login';
    }
  
    // Toggle between login and logout
    authButton.addEventListener('click', function () {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
      if (isLoggedIn) {
        // Logout functionality
        localStorage.setItem('isLoggedIn', 'false');
        alert('You have been logged out.');
        updateButtonText();
      } else {
        // Show login modal
        loginModal.show();
      }
    });
  
    // Handle login form submission
    document.getElementById('login-form').addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission
  
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
  
      // For demo purposes, just check if username and password are filled
      if (username && password) {
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login Successful!');
        loginModal.hide();
        updateButtonText();
      } else {
        alert('Please enter valid credentials.');
      }
    });
  
    // Initialize button text on page load
    updateButtonText();
  });
  