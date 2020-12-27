function usernames(input) {
    let result = {};

    for (let line of input) {
        if (!result.hasOwnProperty(line)) {
            result[line] = line.length;
        };
    };
    let sorted = Object.entries(result);
    sorted.sort((a, b) => sorting(a, b));
    for (let line of sorted) {
        console.log(line[0]);
    };

    function sorting(a, b) {
        return (a[1] - b[1] || a[0].localeCompare(b[0]));
    };

};
usernames(
    ['Ashton',
    'Kutcher',
    'Ashton',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']

)