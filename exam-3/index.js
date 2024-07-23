let users = []

const uiMaker = () => {
    document.getElementById("tbody").innerHTML =""
    for(let i = 0; i< users.length; i++){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerHTML = users[i].number
        let td2 = document.createElement("td")
        td2.innerHTML = users[i].name
        let td3 = document.createElement("td")
        td3.innerHTML = users[i].email
        let td4 = document.createElement("td")
        td4.innerHTML = users[i].department
        let td5 = document.createElement("td")
        td5.innerHTML = users[i].expiriyens
        let td6 = document.createElement("td")
        td6.innerHTML = users[i].level
        let td7 = document.createElement("td")
        td7.innerHTML = users[i].salary
        tr.append(td1,td2,td3,td4,td5,td6,td7)
        document.getElementById("tbody").append(tr)

    }
}


const handleData = (e) => {
    e.preventDefault();

    let number = document.getElementById("number").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let expiriyens = document.getElementById("expiriyens").value;
    let level = document.getElementById("level").value;
    let salary = document.getElementById("totalSalary").value;
    
    let user = {
        number : number,
        name : name,
        email : email,
        department :department,
        expiriyens :expiriyens,
        level : level,
        salary : salary
    }
    users.push(user);
    console.log(users);
    uiMaker();

}

document.getElementById("userData").addEventListener("submit",handleData);

let totalSalary = 0;

totalSalary += Number(salary);
console.log(totalSalary);

document.getElementById('totalSalary').innerHTML = `Total Salary: ${totalSalary}`;
document.getElementById('totalEmployees').innerHTML = `Total Employees: ${employees.length}`;

