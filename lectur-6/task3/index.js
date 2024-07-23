var arr = [2, 3, 4, 5, 6, 9, 10, 3];
// var max = Math.max(arr[6]);
// console.log(max);
let max = arr[0];

for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);