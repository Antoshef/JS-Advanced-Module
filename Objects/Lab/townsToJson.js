function townsToJson(input) {
    let entry = input.shift();
    let [city, lat, long] = entry.split(' | ');
    let result = [];

    city = city.split(' ')[1];
    long = long.split(' ')[0];
    class Town {
        constructor(town, latitutde, longitude) {
            this[city] = town,
            this[lat] = latitutde,
            this[long] = longitude
        }
    };

    for (let line of input) {
        let [town, latitutde, longitude] = line.split(' | ');
        town = town.split('| ')[1];
        latitutde = Number(latitutde).toFixed(2);
        longitude = Number(longitude.split(' ')[0]).toFixed(2);
        let currentTown = new Town(town, +latitutde, +longitude);
        result.push(currentTown);
    };
    console.log(JSON.stringify(result));
};

townsToJson(
    ['| Town | Latitude | Longitude |',
    '| Sofia Asd | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)