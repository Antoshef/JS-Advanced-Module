function autoEngineeringCompany(input) {
    let result = {};

    for (let line of input) {
        let [name, model, qty] = line.split(' | ');
        qty = Number(qty);
        if (result.hasOwnProperty(model)) {
            result[model].qty += qty;
        } else {
            result[model] = {
                company: name,
                qty: qty
            };
        };
    };
    
    let answer = [];
    let sorted = Object.values(result);
    for (let line of sorted) {
        let name = line.company;
        if (!answer.includes(name)) {
            console.log(name);
            let cars = carsModel(result, name);
            for (let car of cars) {
                console.log(`###${car} -> ${result[car].qty}`);
            };
        };
        answer.push(name);
    };

    function carsModel(result, name) {
        let cars = [];
        for (let line in result) {
            if (result[line].company == name) {
                cars.push(line);
            };
        };
        return cars;
    }
};
autoEngineeringCompany([
    'BMW | Q8 | 1000',
    'Audi | Q8 | 1000',
    'Audi | Q6 | 0',
    'Audi | Q7 | 100',
    'Audi | Q8 | 1000',
])