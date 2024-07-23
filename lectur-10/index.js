let users = []
const handleData = (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    // console.log(username,email,number,age)
    
    let user = {
        username : username,
        number : number,
        email : email,
        age : age
    }
    users.push(user);
    console.log(users);

}
document.getElementById("userData").addEventListener("submit",handleData);