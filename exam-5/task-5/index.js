//Count Occurrences of an Element
let array = [1, 2, 2, 3, 2, 4, 5];
let n = array.length;
function Occurrences(target) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (array[i] == target) {
            count++;
        }
    }
     return count;
}
let target = 2;
console.log(Occurrences(target)); 
