const divide = (a,b) => {
    if(a == 0){
        throw new Error("invalid number a value can be zero");
    }
    if(a == 0){
        throw new Error("invalid number b value can be zero");
    }
    return  a / b

}
console.log("after work");
console.log(divide(100,0));
console.log("before work");

try{
    console.log(divide(10,2));
}
catch(err){
    console.log("error.err.message");
}

