class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {

        if (username && salary >= 0 && position && department) {
            if (this.departments[department]) {
                this.departments[department].push({username, salary, position});
            } else {
                this.departments[department] = [];
                this.departments[department].push({username, salary, position})
            }
            return `New employee is hired. Name: ${username}. Position: ${position}`;
        } else if (salary < 0) {
            return ' Invalid input!';
        } else {
            return 'Invalid input!';
        }
    }
    bestDepartment() {
        let best = {};
        for (let line in this.departments) {
            this.departments[line].forEach(x => {
                if (best[line]) {

                    best[line].count += 1;
                    best[line].salary += x.salary;
                } else {
                    best[line] = {
                        count: 1,
                        salary: x.salary,
                    };
                }
                best[line].average = best[line].salary / best[line].count;
            });
        };
        let sorted = Object.entries(best).sort((a, b) => {
            return b.average - a.average;
        });
        best = Array.from(this.departments[sorted[0][0]]);
        let result = `Best Department is: ${sorted[0][0]}\n`;
        let averagesalary = 0;
        best.forEach(x => averagesalary += x.salary);
        averagesalary /= best.length;
        result += `Average salary: ${averagesalary.toFixed(2)}\n`;
        sorted = Object.values(best).sort((a, b) => {
            return (b.salary - a.salary) || (a.username.localeCompare(b.username));
        });
        for (let i = 0; i < sorted.length; i++) {
            let current = sorted[i];
            if (i == sorted.length - 1) {
                result += `${current.username} ${current.salary} ${current.position}`;
            } else {
                result += `${current.username} ${current.salary} ${current.position}\n`;
            };
        };
        return result;
    }
};

let c = new Company();

let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

let act = c.bestDepartment();
