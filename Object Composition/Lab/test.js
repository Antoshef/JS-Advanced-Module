
let array = [
    {name: 'Alex'},
    {age: 25},
    {job: 'Freelancer'},
    {height: 185},
]

let result = array.reduce((acc, x) => {
    return {...acc, ...x}
},{});

console.log(result);



