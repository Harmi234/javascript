const sum = () => {

    let one = document.getElementById('one').value;
    let two = document.getElementById('two').value;
    let three = document.getElementById('three').value;
    let four = document.getElementById('four').value;
    let five = document.getElementById('five').value;

    console.log(one+two+three+four+five);
    console.log(Number(one) + Number(two) + Number(three) + Number(four) + Number(five));

    let sum = Number(one) + Number(two) + Number(three) + Number(four) + Number(five);

    document.getElementById('result').innerHTML=sum
}