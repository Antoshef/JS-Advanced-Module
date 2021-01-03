class Company {
    constructor() {
        this.departments = [];
    }
    addEmployee(username, Salary, Position, Department) {
            this.name = username,
            this.salary = Salary,
            this.position = Position,
            this.department = Department;

        if (this.name && this.salary > 0 && this.position && this.department) {
            this.departments.push(Employee);
            console.log(`New employee is hired. Name: ${this.name}. Position: ${this.position}`);
        } else if (this.salary <= 0) {
            console.log(' Invalid input!');
        } else {
            console.log('Invalid input!');
        }
    }
    bestDepartment() {

    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
