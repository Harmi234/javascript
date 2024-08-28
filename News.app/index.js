document.addEventListener('DOMContentLoaded', () => {
    let userForm = document.getElementById('userForm');
    let userInfo = document.getElementById('userInfo');

    userForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let imgUrl = document.getElementById('imgUrl').value;
        let password = document.getElementById('password').value;
        let country = document.getElementById('country').value;

        userInfo.innerHTML = `
            <h3>User Information</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Image: <img src="${imgUrl}" width="100"></p>
            <p>Password: ${'*'.repeat(password.length)}</p>
            <p>Country: ${country}</p>
            <button id="deleteBtn">Delete</button>
        `
        
        document.getElementById('deleteBtn').addEventListener('click', () => {
            userInfo.innerHTML = ''; 
        });

        userForm.reset();
    });
});

