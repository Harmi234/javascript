console.log("js encapsulation");

// Encapsulation
// Encapsulation is the way of binding data and methods
// Encapsulation provides security
// Encapsulation Hides methods From 3rd party HAckers

class student {
    constructor(){}
    setname(value){
        this.name = value;
    }
    setmarks(value){
        this.marks = value;
    }
    getname(){
        return this.name;
    }
    getmarks(){
        return this.marks;
    }
}
let s1 = new student ();
console.log(s1);