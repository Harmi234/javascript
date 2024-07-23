const sum = () => {

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;

    console.log(num1+num2+num3);
    console.log(Number(num1) + Number(num2) + Number(num3));

    let sum = Number(num1) + Number(num2) + Number(num3);

    document.getElementById('result').innerHTML=sum
}