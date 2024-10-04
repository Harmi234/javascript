let users = JSON.parse(localStorage.getItem("users")) || [];

const getValue = (selector) => document.querySelector(selector).value;

const handleData = (e) => {
    e.preventDefault();

    let username = getValue(".username");
    let email = getValue(".email");
    let password = getValue(".password");
    let photo = document.querySelector(".photo").files[0];

    if (photo) {
        const reader = new FileReader();
        reader.onloadend = () => {
            let user = {
                username: username,
                email: email,
                password: password,
                photo: reader.result 
            };

            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("username", user.username);
            localStorage.setItem("userPhoto", user.photo); 
            localStorage.setItem("isLogin", true);

            alert("Login successful!");
            window.location.href = "./home.html"; 
        };
        reader.readAsDataURL(photo); 
    } else {
        let user = {
            username: username,
            email: email,
            password: password,
            photo: "default_image.png", 
        };

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("username", user.username);
        localStorage.setItem("userPhoto", user.photo);
        localStorage.setItem("isLogin", true);

        alert("Login successful!");
        window.location.href = "./home.html"; 
    }
};

document.querySelector("#userData").addEventListener("submit", handleData);


