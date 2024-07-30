//Find Missing Number
function missingNumber(array) {
    let n = array.length + 1; 
    let extraSum = (n * (n + 1)) / 2; 
    let resultSum = array.reduce((sum, num) => sum + num, 0); 
    return extraSum - resultSum; 
}

console.log(missingNumber([1, 2, 4, 5, 6]));