function cityMarkets(input) {
    let result = {};
    class Product {
        constructor(product, price) {
            this.product = product,
            this.price = price
        }
    }

    for (let line of input) {
        let [town, product, price] = line.split(' -> ');
        price = price.split(' : ');
        price = price.reduce((acc,x) => Number(acc) * Number(x));
        let current = new Product(product, price);
        if (result.hasOwnProperty(town)) {
            result[town].push(current);
        } else {
            result[town] = [];
            result[town].push(current);
        };
    }
    let sorted = Object.entries(result);
    for (let line of sorted) {
        console.log(`Town - ${line[0]}`);
        for (let word of line[1]) {
            console.log(`$$$${word.product} : ${word.price}`);
        };
    };
};
cityMarkets(
    ['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
)