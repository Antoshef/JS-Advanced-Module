solve = (input) => {

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    let stocks = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    const commands = {
        restock: (microelement, quantity) => {
            stocks[microelement] += quantity;
            return 'Success';
        },

        prepare: (product, quantity) => {
            let recipe = Object.entries(recipes[product]);

            for (let [item, countNeeded] of recipe) {
                if (stocks[item] < countNeeded * quantity) {
                    return `Error: not enough ${item} in stock`;
                };
            };
            recipe.forEach(([item, countNeeded]) => {
                stocks[item] -= countNeeded * quantity;
            });
            return 'Success';
        },

        report: () => {
            return `protein=${stocks.protein} carbohydrate=${stocks.carbohydrate} fat=${stocks.fat} flavour=${stocks.flavour}`;
        }
    };
    return (input) => {
        let [command, item, count] = input.split(' ');
        return commands[command](item,+count);
    }
};

let manager = solve();
manager('restock protein 100');
manager('restock carbohydrate 100');
manager('restock fat 100');
manager('restock flavour 100');
manager('report');
manager('prepare apple 2');
manager('report');
manager('prepare apple 1');
// manager('prepare turkey 1');
manager('report');

// [, 'Success'],
//     [, 'Success'],
//     ['', 'Success'],
//     ['', 'Success'],
//     ['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'],
//     ['', 'Success'],
//     ['', 'protein=100 carbohydrate=98 fat=100 flavour=96'],
//     ['', 'Success'],
//     ['report', 'protein=100 carbohydrate=97 fat=100 flavour=94']