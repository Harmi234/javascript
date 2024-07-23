let users = [];
let totalfee = 0;

const uiMaker = () => {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    totalfee = 0;

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = user.name;

        let td2 = document.createElement("td");
        td2.innerHTML = user.Grid;

        let td3 = document.createElement("td");
        td3.innerHTML = user.Course;

        let td4 = document.createElement("td");
        td4.innerHTML = user.fee;

        let td5 = document.createElement("td");
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        removeButton.addEventListener("click", () => handleDelete(i));
        td5.appendChild(removeButton);

        tr.append(td1, td2, td3, td4, td5);
        tbody.appendChild(tr);
    }
};

const handleDelete = (index) => {
    users.splice(index, 1);
    uiMaker();
};

const handleData = (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let Grid = document.getElementById("Grid").value.trim();
    let Course = document.getElementById("courseoption").value;
    let fee = document.getElementById("feeoption").value;

    if (name.length >= 2 && Grid.length === 4) {
        let newUser = {
            name: name,
            Grid: Grid,
            Course: Course,
            fee: fee
        };
        users.push(newUser);
        console.log(users);
        uiMaker();

        document.getElementById("studentData").reset();
    } else {
        if (name.length < 2) {
            alert("Name must be at least 2 characters long.");
        } 
        else if (Grid.length !== 4) {
            alert("Grid number must be exactly 4 digits long.");
        } 
        else {
            alert("Please enter all required fields with valid data.");
        }
    }
};

document.getElementById("studentData").addEventListener("submit", handleData);

uiMaker();