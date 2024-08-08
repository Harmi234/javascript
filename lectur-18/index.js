let users = []

const handleData = (e) =>{
    e.preventDefault()

    let name = document.getElementById("Name").value;
    let number = document.getElementById("number").value;
    let dropdown = document.getElementById("dropdown").value;

    let user = {
        name :name,
        number : number,
        dropdown : dropdown
    }

    users.push(user);
    console.log(users);
}
document.getElementById("userData").addEventListener("submit", handleData);