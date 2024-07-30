class Student{
    constructor(name,number,grid,couse,fee){
       this.name = name
       this.number = number
       this.grid = grid
       this.couse = couse
       this.fee = fee
    }

    leave(name){
        console.log("you can take leave")
    }
    exam(name){
        console.log("congrats for first renk");
    }
}

let stu = new Student("haemi",548264758,7391,"fullstack",55000)
let Student2 = new Student("hemanshu",7546929,7392,"fullstack",50000)
console.log(stu.number,Student2)
Student2.leave();
stu.exam();