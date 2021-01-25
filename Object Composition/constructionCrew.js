
let worker = { weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
function job(input) {

    if (input.dizziness == true) {
        let result = input.experience * input.weight / 10; 
        input.levelOfHydrated += result;
        input.dizziness = false;
    }
    return input
}

console.log(job(worker))


 