// Check if Array is Sorted
function Sorted (array){
    if(array.length < 2){
        return true;
    }

    for(let i=0; i < array.length; i++){
        if (array[i] > array[i + 1]) {
          return   false;
        }
     }
    return true;
}
console.log(Sorted([1, 2, 3, 4, 5])); 
console.log(Sorted([5, 3, 4, 1, 2]));


       

