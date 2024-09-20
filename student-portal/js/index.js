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

// Sorting
const handleSort = (orderBy) => {
    if (orderBy === "lth") {
        let temp = students.sort((a, b) => a.fee - b.fee);
        displayStudents(temp);
    } else {
        let temp = students.sort((a, b) => b.fee - a.fee);
        displayStudents(temp);
    }
};

document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("htl").addEventListener("click", () => handleSort("htl"));

// filter 
const generateCourseFilters = (students) => {
    const courses = [...new Set(students.map(student => student.course))];
    const courseFilterDiv = document.getElementById('course-filters');
    courseFilterDiv.innerHTML = '';
    
    courses.forEach(course => {
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-secondary', 'me-2');
        button.innerHTML = `${course}`;
        button.addEventListener('click', () => handleCourseFilter(course));
        courseFilterDiv.appendChild(button);
    });
};

const handleCourseFilter = (course) => {
    let filteredStudents = students.filter(student => student.course === course);
    displayStudents(filteredStudents);
};

generateCourseFilters(students);