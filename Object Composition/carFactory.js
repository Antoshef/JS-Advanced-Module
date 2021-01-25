
let requirements = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 
}

function solve(input) {
    let engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 },
    }

    let result = {
        model: input.model,
        engine: {},
        carriage: {
            type: input.carriage,
            color: input.color,
        },
        wheels: [],
    };

    input.wheelsize % 2 === 0
    ? result.wheels = [input.wheelsize -= 1,input.wheelsize,input.wheelsize,input.wheelsize]
    : result.wheels = [input.wheelsize,input.wheelsize,input.wheelsize,input.wheelsize]

    for (let x in engines) {
        if (engines[x].power >= input.power) {
            result.engine = engines[x];
            break;
        };
    };

    return result
};

console.log(solve(requirements));
