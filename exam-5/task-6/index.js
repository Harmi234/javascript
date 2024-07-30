//Remove Duplicates
let array = [1, 2, 2, 3, 4, 4, 5];
let n = array.length
function remove(array) {
    let Array = []; 

    for (let i = 0; i < n; i++) {
        if (!Array.includes(array[i])) {
            Array.push(array[i]);
        }
    }
    return Array;
}
console.log(remove(array));