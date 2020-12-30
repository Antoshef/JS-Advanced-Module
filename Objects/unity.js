class Rat {
    constructor(name) {
        this.name = name,
        this.unitedRats = []
    }
    unite(rat) {
        this.unitedRats.push(rat);
    }
    getRats() {
        return this.unitedRats;
    }
    toString() {
        if (this.unitedRats.length > 0) {
            let result = this.name + '\n';
            this.unitedRats.forEach(rat => {
                result += '##' + rat.name + '\n';
            });
            return result;
        } else {
            return this.name;
        };
    }
}



let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("fake rat"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex

    