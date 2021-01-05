function encoding(x) {
    let check = x.split('');
    let array = [];
    check.forEach(element => {
        let y = element;
        if (element == '&') {
            y = '&amp;'
        } else if (element == '<') {
            y = '&lt;'
        } else if (element == '>') {
            y = '&gt;'
        } else if (element == '"') {
            y = '&quot;'
        };
        array.push(y);
    });
    array = array.join('');
    return array;
}

console.log(encoding('pesho <div>-a'));