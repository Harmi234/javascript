let user = []; 

let handleData = (e) => {
    e.preventDefault(); 

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let number = document.getElementById('number').value;

    if (username.length >= 2 && email.length > 0 && password.length >= 8 && number.length === 10) {
        
        let newUser = {
            username: username,
            email: email,
            password: password,
            number: number
        };
        user.push(newUser);
        console.log(user); 

        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('number').value = '';

    } 
    else {

        if (username.length < 2) {
            alert("Username must be at least 2 characters long.");
        }
         else if (email.length === 0) {
            alert("Please enter a valid email address.");
        }
         else if (password.length < 8) {
            alert("Password must be at least 6 characters long.");
        }
         else if (number.length !== 10) {
            alert("Number must be exactly 10 digits long.");
        }
         else {
            alert("Please enter all required fields with valid data.");
        }
    }
};


document.getElementById("result").addEventListener("click", handleData);