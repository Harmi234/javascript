import getValue from "../component/helper.js";
import Navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let isLogin = localStorage.getItem("isLogin") || false;

if (isLogin == false) {
    window.location.href = "/project/pages/login.html";
}


let products = JSON.parse(localStorage.getItem("products")) || [];


const handleSubmit = (e) => {
    e.preventDefault();

    let product = {
        title: getValue(".title"),
        price: getValue(".price"),
        category: getValue(".category"),
        img: getValue(".img"),
        id: Date.now()
    };
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    alert("Product added!");
};

document.getElementById("productData").addEventListener("submit", handleSubmit);