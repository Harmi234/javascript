import Navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let students = JSON.parse(localStorage.getItem('students')) || [];

const displayStudents = (students) => {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = ''; 

    students.forEach(student => {
        let row = document.createElement('tr');
        let name = document.createElement('td');
        name.innerHTML = student.name;
        row.appendChild(name);
        let number = document.createElement('td');
        number.innerHTML = student.number;
        row.appendChild(number);
        let course = document.createElement('td');
        course.innerHTML = student.course;
        row.appendChild(course);
        let fee = document.createElement('td');
        fee.innerHTML = student.fee;
        row.appendChild(fee);

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