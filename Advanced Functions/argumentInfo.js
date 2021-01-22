
function solve() {

    let count = {};
    let result = [];

    [...arguments].forEach(element => {
        let type = typeof element;
        result.push(`${type}: ${element}`);

        if (!count[type]) {
            count[type] = 0;
        };

        count[type]++;
    });
    let sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
    result.forEach(a => console.log(a));
    sorted.forEach(a => console.log(`${a[0]} = ${a[1]}`));
};

solve('cat',43, 42, function () { console.log('Hello world!'); });