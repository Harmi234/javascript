//Find the Largest Element
let num = [5, 10, 21, 19, 12];
let n = num.length
let max = num[0];

for (let i = 1; i < n; i++) {
    if(num[i] > max){
        max = num[i];
    }
}
console.log(max);

