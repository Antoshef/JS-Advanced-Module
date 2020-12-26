function heroicInventory(input) {
    let result = [];
    class Hero {
        constructor(name, lvl, items) {
            this.name = name,
            this.level = lvl,
            this.items = items
        }
    }

    for (let line of input) {
        let [name, lvl, items] = line.split(' / ');
        lvl = Number(lvl);
        items = items ? items.split(', ') : [];
        result.push(new Hero(name,lvl,items));
    }

    console.log(JSON.stringify(result));
}
heroicInventory(
    ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']

)