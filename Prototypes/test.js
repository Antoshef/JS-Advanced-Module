function Person(firstName, lastName)  {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.speak = function() {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
}

let person = new Person('Pesho', 'Georgiev');
let secondPerson = new Person('Shosho', 'Georgiev');

console.log(person.speak === secondPerson.speak);