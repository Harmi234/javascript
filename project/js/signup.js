import getValue from "../component/helper.js";
import Navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let users = JSON.parse(localStorage.getItem("users")) || []

const handleData = (e) => {
    e.preventDefault();

    let user = {
        username: getValue(".username"),
        email: getValue(".email"),
        password: getValue(".password"),
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href="/project/index.html"
};

document.querySelector("#userData").addEventListener("submit", handleData);