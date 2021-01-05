function populationInTowns(input) {
    let result = {};

    for (let line of input) {
        let [town, population] = line.split(' <-> ');
        if (result[town]) {
            result[town] += Number(population);
        } else {
            result[town] = Number(population);
        }
    }
    for (let key in result) {
        console.log(`${key} : ${result[key]}`);
    };
};
populationInTowns(
    ['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)