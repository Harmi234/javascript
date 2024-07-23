let users = [];
let totalSalary = 0;

const uiMaker = () => {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = user.username;

        let td2 = document.createElement("td");
        td2.innerHTML = user.email;

        let td3 = document.createElement("td");
        td3.innerHTML = user.number;

        let td4 = document.createElement("td");
        td4.innerHTML = user.salary;

        let td5 = document.createElement("td");
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        removeButton.addEventListener("click", () => handleDelete(i));
        td5.appendChild(removeButton);

        tr.append(td1, td2, td3, td4, td5);
        tbody.appendChild(tr);

        totalSalary += parseFloat(user.salary);
    }
    document.getElementById("totalsalary").textContent = `Total Salary: ${totalSalary}`; 
};

const handleDelete = (index) => {
    users.splice(index,1);
    totalSalary = 0;
    uiMaker();
};

const handleData = (e) => {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let salary = document.getElementById("salary").value;

    let user = {
        username: username,
        number: number,
        email: email,
        salary: salary
    };

    users.push(user);
    console.log(users);
    uiMaker();
};
document.getElementById("userData").addEventListener("submit", handleData);

uiMaker();

