let users = [];

const handleData = (e) => {
    e.preventDefault();

    let regexUsername = /^[a-zA-Z0-9_]{3,15}$/; 
    let regexPhoneNumber = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/; 
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexAge = /^\d+$/;

    let username = document.getElementById("username").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let dropdown = document.getElementById("dropdown").value;
    let radio = document.getElementById("radio").value; 
    let checkbox = document.getElementById("checkbox");
    let vibret = document.getElementById("vibret").value; 

    document.getElementById('username').style.border = '';
    document.getElementById('number').style.border = '';
    document.getElementById('email').style.border = '';
    document.getElementById('age').style.border = '';

    if (!regexUsername.test(username)) {
        document.getElementById('username').style.border = '5px solid red';
        alert("Invalid username. It should be alphanumeric and 3-15 characters long.");
        return;
    }
    if (!regexPhoneNumber.test(number)) {
        document.getElementById('number').style.border = '5px solid red';
        alert("Invalid phone number format. Ensure it matches the expected format.");
        return;
    }
    if (!regexEmail.test(email)) {
        document.getElementById('email').style.border = '5px solid red';
        alert("Invalid email format.");
        return;
    }
    if (!regexAge.test(age) || age < 1 || age > 100) {
        document.getElementById('age').style.border = '5px solid red';
        alert("Invalid age. It should be a number between 1 and 100.");
        return;
    }

    document.getElementById('userData').style.border = '5px solid green';

    let user = {
        username: username,
        number: number,
        email: email,
        age: age,
        dropdown: dropdown,
        radio: radio,
        checkbox: checkbox,
        vibret: vibret
    };

    users.push(user);
    console.log(users);
};

document.getElementById("userData").addEventListener("submit", handleData);