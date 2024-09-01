import getValue from "../component/helper.js";
import Navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let users = JSON.parse(localStorage.getItem("users")) || [];

const handleData = (e) => {
  e.preventDefault();

  let user = {
    email: getValue(".email"),
    password: getValue(".password"),
  };

  let isMatched = users.filter(
    (ele) => ele.email == user.email && ele.password == user.password
  );

  console.log(isMatched);
};

document.querySelector("#userData").addEventListener("submit", handleData);
