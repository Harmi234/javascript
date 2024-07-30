
let users = [];

const handleData = (e) => {
    e.preventDefault();

    let regexUsername = /^[a-zA-Z0-9_]{3,15}$/; 
    let regexPhoneNumber = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/; 
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let username = document.getElementById("username").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;
    let genderRadio = document.querySelector('input[name="gender"]:checked'); // Handling radio buttons
    let vibrate = document.getElementById("vibrate").checked; // Handle vibrate checkbox

    document.getElementById('usernameErr').innerText = '';
    document.getElementById('numberErr').innerText = '';
    document.getElementById('emailErr').innerText = '';
    document.getElementById('countryErr').innerText = '';
    document.getElementById('genderErr').innerText = '';
    document.getElementById('vibrateErr').innerText = '';

    debugger
    if (!regexUsername.test(username)) {
        document.getElementById('usernameErr').innerText = 'Invalid username. It should be alphanumeric and 3-15 characters long.';
        return;
    }
    if (!regexPhoneNumber.test(number)) {
        document.getElementById('numberErr').innerText = 'Invalid phone number format. Ensure it matches the expected format.';
        return;
    }
    if (!regexEmail.test(email)) {
        document.getElementById('emailErr').innerText = 'Invalid email format.';
        return;
    }
    if (!country) {
        document.getElementById('countryErr').innerText = 'Please select a country.';
        return;
    }
    if (!genderRadio) {
        document.getElementById('genderErr').innerText = 'Please select a gender.';
        return;
    }
  debugger

    document.getElementById('usernameErr').style.border = '5px solid green';
    
    let user = {
        username: username,
        number: number,
        email: email,
        country: country,
        gender: genderRadio.value,
        vibrate: vibrate 
    };

    users.push(user);
    console.log(users);
};

document.getElementById("ValidateForm").addEventListener("submit", handleData);