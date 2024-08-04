class Employe {
    #name;
    #salary;
    
    constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }

    leave() {
        console.log(`${this.#name} can take leave.`);
    }

    getSalary(salary) {
        if (salary < 0) {
            console.log("Salary cannot be negative.");
        } else {
            this.#salary = salary;
            console.log(`Salary for ${this.#name}: ${this.#salary}`);
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

let emp = new Employe("Harmi", 50000);
emp.leave();
emp.getSalary(55000);

let mgr = new Manager("Harmi", 80000, "IT");
mgr.leave();
mgr.getSalary(85000);
mgr.assignTask("Prepare annual report");
console.log(mgr.department);