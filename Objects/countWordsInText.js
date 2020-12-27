function countWords(input) {
    input = input[0];
    let result = {};
    let pattern = /[\w]+/g;
    let match = input.match(pattern);
    for (let word of match) {
        if (result.hasOwnProperty(word)) {
            result[word] += 1;
        } else {
            result[word] = 1;
        };
    };
    console.log(JSON.stringify(result));
}
countWords(
    ['JS devs use Node.js for server-side JS.-- JS for devs']
)