function cappyJuice(input) {
    let order = [];
    let result = {};

    for (let line of input) {
        let [name, qty] = line.split(' => ');
        qty = Number(qty);
        if (result.hasOwnProperty(name)) {
            result[name] += qty;
            if (result[name] >= 1000 && !order.includes(name)) {
                order.push(name);
            }
        } else {
            result[name] = qty;
            if (qty >= 1000) {
                order.push(name);
            };
        };
    };
    for (let name of order) {
        let bottles = Math.trunc(result[name] / 1000);
        console.log(`${name} => ${bottles}`);
    }
};
cappyJuice(
    ['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
    

)