let users = JSON.parse(localStorage.getItem("users")) || [];

const handleData = (e) => {
  e.preventDefault();

  let user = {
    email: getValue(".email"),
    password: getValue(".password"),
  };

  let matchedUser = users.find(
    (ele) => ele.email == user.email && ele.password == user.password
  );

  if (matchedUser) {
    alert("Login success");

    localStorage.setItem("username", matchedUser.username);
    localStorage.setItem("photo", matchedUser.photo); 
    localStorage.setItem("isLogin", true);
    window.location.href = "./home.html";
  } else {
    alert("Login failure");
  }
};

document.querySelector("#userData").addEventListener("submit", handleData);

 function getValue(selector) {
   return document.querySelector(selector).value;
 }
