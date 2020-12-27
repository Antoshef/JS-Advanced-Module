function systemsRegister(input) {
    let result = {};

    for (let line of input) {
        let [system, component, sub] = line.split(' | ');
        if (result.hasOwnProperty(system)) {
            if (result[system].hasOwnProperty(component)) {
                result[system][component] += ', ' + sub;
            } else {
                result[system][component] = {};
                result[system][component] = sub;
            }
        } else {
            result[system] = {};
            result[system][component] = {};
            result[system][component] = sub;
        }
    }
    let sortKeys = Object.entries(result)
    .sort((a, b) => sortingKeys(a, b));

    function order(a, b) {
        let answer = b[1].length - a[1].length
        return answer;
    }

    function sortingKeys(a, b) {
        let aLen = Object.keys(a[1]);
        let bLen = Object.keys(b[1]);
        let answer = bLen.length - aLen.length;
        return (answer || a[0].localeCompare(b[0]));
    }
    for (let line of sortKeys) {
        console.log(line[0]);
        let i = 0;
        let ordered = Object.entries(line[1])
        .sort((a, b) => order(a, b));
        for (let comp of ordered) {
            console.log(`|||${comp[0]}`);
            let components = comp[1];
            let each = components.split(', ')
            .forEach(element => {
                console.log(`||||||${element}`);    
            });
            i++;
        };
    };
};
systemsRegister([
    'AULS | a | Home Page',
    'AULS | a | Login Page',
    'AULS | b | Submittion Page',
    'Lambda | a | A23',
    'AULS | a | Login Page',
    'Lambda | a | B24',
    'Lambda | b | B24',

])