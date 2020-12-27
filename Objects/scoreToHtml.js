function scoreToHtml(input) {
    input = JSON.parse(input);
    console.log('<table>');
    console.log('  <tr><th>name</th><th>score</th></tr>');

    for (let line of input) {
        let name = line.name.split('');
        check(name);
        name = name.join('');
        console.log(`  <tr><td>${name}</td><td>${line.score}</td></tr>`);
    };
    console.log('</table>');

    function check(name) {
        for (let i = 0; i < name.length; i++) {
            let current = name[i];
            if (current == '<') {
                name[i] = '&lt;';
            } else if (current == '>') {
                name[i] = '&gt;';
            } else if (current == '&') {
                name[i] = '&amp;';
            } else if (current == '"') {
                name[i] = '&quot;';
            } else if (current == "'") {
                name[i] = '&#39;';
            }
        };
    }
}
scoreToHtml(
    ['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']

)