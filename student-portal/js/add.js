import Navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

document.getElementById('student-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const student = {
        name: document.getElementById('studentName').value,
        number: document.getElementById('studentNumber').value,
        course: document.getElementById('studentCourse').value,
        fee: document.getElementById('studentFee').value
    };

    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    window.location.href = "/student-portal/index.html";
});
