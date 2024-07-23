var array=["RED", "AND", "WHITE"]

let n = array.length;
for(let i=0; i<n; i++){
    // console.log(array[i]);
    if(i%2==0){
        console.log(array[i].toUpperCase());
    }
    else{
        console.log(array[i].toLowerCase());
    }
   
}

// output : RED and WHITE