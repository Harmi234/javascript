import Navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let students = JSON.parse(localStorage.getItem('students')) || [];

const mapper = (students) => {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = ''; 

    students.map(student => {
        let name = document.createElement('td');
        name.innerHTML = student.name;
        let number = document.createElement('td');
        number.innerHTML = student.number;
        let course = document.createElement('td');
        course.innerHTML = student.course;
        let fee = document.createElement('td');
        fee.innerHTML = student.fee;
        let row = document.createElement('tr');
        row.append(name, number, course, fee);
        studentList.append(row);
    });
};

const displayStudents = (students) => {
    mapper(students);
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