
function solve(name,age,weight,height) {

    let bmi = Math.round(weight / ((height / 100)**2));
    let status = calcStat(bmi);
    let person = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI: bmi,
        status,
    }

    if (status == 'obese') {
        person.recommendation = 'admission required';
    }
    
    function calcStat(a) {
        if (a < 18.5) {
            return 'underweight'
        } else if (a < 25) {
            return 'normal'
        } else if (a < 30) {
            return 'overweight'
        } else {
            return 'obese'
        };
    }
    return person;
}

let result = solve('Honey Boo Boo', 9, 57, 137);
console.log(result.name);
console.log(result.BMI);
console.log(result.personalInfo.age);
console.log(result.personalInfo.height);
console.log(result.personalInfo.weight);
console.log(result.status);
console.log(result.recommendation);