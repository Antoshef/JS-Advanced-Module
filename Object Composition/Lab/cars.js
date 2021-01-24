function cars(input) {
    let result = {};

    let garage = {
        create: ([model, comm, inh]) => {
            if (!comm) {
                result[model] = {};
            } else {
                result[model] = result[inh];
            }
        },
        set: ([model, key, value]) => {
            result[model][key] = value;
        },
        print([model]) {
            console.log(JSON.parse(result[model]));
        }
    };
    
    input.forEach(element => {
        let [command, ...args] = element.split(' ');
        return garage[command](args);
    });
}

cars(['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat'])