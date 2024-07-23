const subtract = () => {

    let num1 = document.getElementById('num1').Value;
    let num2 = document.getElementById('num2').Value;
    let num3 = document.getElementById('num3').Value;
    let num4 = document.getElementById('num4').Value;

    console.log(num1-num2-num3-num4);
    console.log(Number(num1) - Number(num2) - Number(num3) - Number(num4));

    let sub = Number(num1) - Number(num2) - Number(num3) - Number(num4);

    document.getElementById('result').innerHTML= sub;
}