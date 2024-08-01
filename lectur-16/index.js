class Employe {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    leave() {
        console.log(`${this.name} can take leave.`);
    }

    Salary(Salary) {
        if (Salary < 0) {
            console.log("Salary cannot be negative.");
        }
         else {
            this.salary = Salary;
            console.log(`salary for ${this.name}: ${this.salary}`);
        }
    }
}

class Manager extends Employe {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    assignTask(task) {
        console.log(`${this.name} is assigning task: ${task}`);
    }

    leave() {
        console.log(`${this.name} (Manager) can take leave.`);
    }
}

let emp = new Employe("harmi", 50000);
emp.leave();
emp.Salary(55000);

let mgr = new Manager("harmi", 80000, "IT");
mgr.leave();
mgr.Salary(85000);
mgr.assignTask("Prepare annual report");
console.log(mgr.department);