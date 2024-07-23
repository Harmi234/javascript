const sub = () => {

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    console.log(num1*num2);
    console.log(Number(num1) * Number(num2));

    let sub = Number(num1) * Number(num2);

    document.getElementById('result').innerHTML = sub;
}