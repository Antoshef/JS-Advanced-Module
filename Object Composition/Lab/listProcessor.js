function listProcessor(input) {
    let processor = {
        add: text => result.push(text),
        remove: text => result.forEach(x => result.splice(result.indexOf(text), 1)),
        print: () => console.log(result.join()),
    };
    let result = [];
    input.forEach(element => {
        let [command, text] = element.split(' ');
        return processor[command](text);
    });
};

listProcessor(['add peter', 'add george', 'add peter', 'remove peter','print'])