const nameElement = document.querySelector('.name-tag');
const nameInput = document.querySelector('.name');
const ageElement = document.querySelector('.age-tag');
const ageInput = document.querySelector('.age');

// nameElement.innerHTML = localStorage.getItem('myname');
// nameInput.addEventListener('input', (e) => {
//     localStorage.setItem('myname',e.target.value) ;
//     nameElement.innerHTML = localStorage.getItem('myname');
// })

// ageElement.innerHTML = localStorage.getItem('myage');
// ageInput.addEventListener('input', (e) => {
//     localStorage.setItem('myage',e.target.value) ;
//     ageElement.innerHTML = localStorage.getItem('myage');
// })

const myData = JSON.parse(localStorage.getItem('myData')) || {}

if(myData.name){
    nameElement.innerHTML = myData.name;
}

if(myData.age){
    ageElement.innerHTML = myData.age;
}

nameInput.addEventListener('input',(e) => {
  myData.name = e.target.value;
  localStorage.setItem('myData',JSON.stringify(myData));
  nameElement.innerHTML = e.target.value;
});

ageInput.addEventListener('input',(e) =>{
    myData.age = e.target.value;
    localStorage.setItem('myData',JSON.stringify(myData));
    ageElement.innerHTML = e.target.value;
});

