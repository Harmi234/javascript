// Rotate Array
const Array = [1, 2, 3, 4, 5];
const positions = 2;
function rotateArray(Array, positions) {
    let n = Array.length;
    let effectPositions = positions % n;
    
    let end = Array.slice(-effectPositions);  
    let start = Array.slice(0, n - effectPositions); 
    
    let rotatedArray = end.concat(start);
    
    return rotatedArray;
}

console.log(rotateArray(Array, positions)); 