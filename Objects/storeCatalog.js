function storeCatalog(input) {
    let result = {};

    for (let line of input) {
        let [product, price] = line.split(' : ');
        let group = product[0];
        if (result.hasOwnProperty(group)) {
            result[group][product] = price;
        } else {
            result[group] = {};
            result[group][product] = price;
        }
    }
    let sortKeys = Object.keys(result)
    .sort((a,b) => a.localeCompare(b));
    for (let line of sortKeys) {
        console.log(line);
        let sorted = Object.entries(result[line])
        .sort((a,b) => a[0].localeCompare(b[0]))
        .forEach(element => {
            console.log(`  ${element[0]}: ${element[1]}`);    
        });
    }
}
storeCatalog(
    ['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)