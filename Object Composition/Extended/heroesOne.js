function solve() {

    let fighter = (name) => {
        [this.name, this.health, this.stamina] = [name, 100, 100];

        this.fight = function() {
            this.stamina--;
            console.log(`${this.name} slashes at the foe!`);
        };

        return {name, health, stamina, fight}
    }

    let mage = (name) => {
        [this.name, this.health, this.mana] = [name, 100, 100];
        
        this.cast = function(spell)  {
            this.mana--;
            console.log(`${this.name} cast ${spell}`);
        }

        return {name, health, mana, cast}
    };

    return {fighter: fighter, mage: mage}
};

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
