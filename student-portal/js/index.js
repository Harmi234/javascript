import Navbar from "../component/navbar.js";


document.getElementById("navbar").innerHTML = Navbar();

let students = JSON.parse(localStorage.getItem('students')) || [];

const displayStudents = (students) => {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = ''; // Clear previous rows

    students.forEach(student => {
        let row = document.createElement('tr');

        let nameCell = document.createElement('td');
        nameCell.textContent = student.name;
        row.appendChild(nameCell);

        let numberCell = document.createElement('td');
        numberCell.textContent = student.number;
        row.appendChild(numberCell);

        let courseCell = document.createElement('td');
        courseCell.textContent = student.course;
        row.appendChild(courseCell);

        let feeCell = document.createElement('td');
        feeCell.textContent = student.fee;
        row.appendChild(feeCell);

        studentList.appendChild(row);
    });
};

displayStudents(students);

// Search 
const search = (e) => {
    e.preventDefault();
  
    let searchValue = document.getElementById('search').value;
    let filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    displayStudents(filteredStudents); 
};

document.getElementById("searching").addEventListener("submit", search);