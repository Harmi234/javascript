const sum = () => {

    let num = document.getElementById('num').value;

    console.log(num);
    // console.log(Number(num));

    let sum = Number(num);

    document.getElementById('result').innerHTML=`it's an even number`
}