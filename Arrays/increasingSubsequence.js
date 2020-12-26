function increasingSubsequence(input) {
    let min = Number.MIN_SAFE_INTEGER;
    input.forEach(element => {
        if (element >= min) {
            console.log(element);
            min = element;
        }
    });
}
increasingSubsequence(
    [20, 
        3, 
        2, 
        15,
        6, 
        1]
        
        
)