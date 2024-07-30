//Find the Smallest Element
let num = [13, 17, 11, 19, 12];
let n = num.length;
let Smallest = num[0];

for (let i = 1; i < n; i++) {
    if(num[i] < Smallest){
        Smallest = num[i];
    }
}
console.log(Smallest);