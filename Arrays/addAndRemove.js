function addAndRemove(input){
    let result = [];
    for (let i = 1; i <= input.length; i++) {
        let current = input[i-1];
        if (current == 'add') {
            result.push(i);
        } else {
            result.pop();
        }
    }
    if (result.length > 0) {
        result.forEach(x => console.log(x));
    } else {
        console.log('Empty');
    }
}
addAndRemove([

'remove', 
'remove', 
]

)