const sum = () => {

    let num = document.getElementById('num').value;

    console.log(num%3);
    console.log(Number(num)%3);

    let sum = Number(num)%3;

    document.getElementById('result').innerHTML=`Yes`
}