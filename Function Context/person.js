class Person {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        let pattern = /\w \w/;
        if (pattern.test(value)) {
            this.firstName = value.split(' ')[0];
            this.lastName = value.split(' ')[1];
        } 
    }
}

let person = new Person("Albert", "Simpson");
console.log(person.fullName);//Albert Simpson
person.firstName = "Simon";
console.log(person.fullName);//Simon Simpson
person.fullName = "Peter";
console.log(person.firstName) // Simon
console.log(person.lastName) // Simpson


// let person = new Person("Peter", "Ivanov");
// console.log(person.fullName);//Peter Ivanov
// person.firstName = "George";
// console.log(person.fullName);//George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName);//George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName)//Nikola
// console.log(person.lastName)//Tesla
