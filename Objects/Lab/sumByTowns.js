function sumByTowns(input) {

    let result = {};
    for (let i = 0; i< input.length; i+= 2) {
        let town = input[i];
        let income = Number(input[i + 1]);
        if (result[town]) {
            result[town] += income;
        } else {
            result[town] = income;
        };
    };
    console.log(JSON.stringify(result));
};
sumByTowns(
    ['Sofia','20','Varna','3','sofia','5','varna','4']
)