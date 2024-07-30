//Find Missing Number
function missingnumber(array){
    let n = array.length+1;
    let extrasum =  n*(n+1)/2;
    let  rezultSum = array((sum, num) => sum + num, 0); 
    return extrasum - rezultSum;
}
console.log(missingnumber([1, 2, 4, 5, 6])); 