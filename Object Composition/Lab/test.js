function Person (fName,lName,age,location) {
        this.firstName = fName,
        this.lastName = lName,
        this.age = age,
        this.location = location,
        this.name = function(input) {
            papa = {obj: 20};
            return papa
        }
    }

let mama = new Person('Sabina','Nikolova',60,'Yambol','Indonesia');
console.log('he is ' + mama.name('tadjik'));
console.log(mama.name[papa]);
let txt = '';
for (let x in mama) {
    txt += mama[x] + ' ';
}
console.log(txt);