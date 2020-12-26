function sortArray(input) {
    let result = input.sort((a, b) => {
        return (a.length - b.length || a.localeCompare(b));
    });
    result.forEach(element => {
        console.log(element);
    });
}
sortArray(
    ['test', 
    'Deny', 
    'omen', 
    'Default']
    
)