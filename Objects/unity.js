class Rat {
    constructor(name) {
        
    }
    unite(rat) {
        if (Object.keys(rat) == 2) {
            this.unitedRats.push(rat);
        };
    }
    getRats() {
        return this.unitedRats.toString;
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex

    