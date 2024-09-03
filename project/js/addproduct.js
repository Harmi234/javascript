import Navbar from "../component/navbar.js";

document.getElementById('navbar').innerHTML = Navbar();

let isLogin = localStorage.getItem('isLogin') || false;

if(isLogin == false){
    window.location.href="/project/pages/login.html"
}