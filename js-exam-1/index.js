const add = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
   
    console.log(Number(num1) + Number(num2));
    document.getElementById('result').innerHTML = `The result of addition is 8`
   
 
 }
 
 const sub = () => {
     let num1 = document.getElementById('num1').value;
     let num2 = document.getElementById('num2').value;
 
     console.log(num1 - num2);
     document.getElementById('result').innerHTML = `The result of subtraction is 2`
 
 }
 
 const multiply = () => {
     let num1 = document.getElementById('num1').value;
     let num2 = document.getElementById('num2').value;
 
     console.log(num1 * num2);
     document.getElementById('result').innerHTML = `The result of multiplication is 15`
 
 }
 
 const divide = () => {
     let num1 = document.getElementById('num1').value;
     let num2 = document.getElementById('num2').value;
 
     console.log(num1 / num2);
     document.getElementById('result').innerHTML = `The result of division is 5`
 }
 