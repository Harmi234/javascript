
class Employ {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        this.skills = [];
    }

    leave() {
        console.log("You can take leave.");
    }

    updateSalary(newSalary) {
        if (newSalary < 0) {
            console.log("Salary cannot be negative.");
        } else {
            this.salary = newSalary;
            console.log(`New salary for ${this.name}: ${this.salary}`);
        }
    }

    addSkill(skill) {
        this.skills.push(skill);
        console.log(`Skill ${skill} added.`);
    }

    displaySkills() {
        console.log(`${this.name}'s skills: ${this.skills.join(', ')}`);
    }
}

// Creating an instance and using the class
let stu = new Employ("Harmi", 50000);
stu.addSkill("JavaScript");
stu.addSkill("Project Management");
stu.displaySkills();
stu.leave();
stu.updateSalary(60000);