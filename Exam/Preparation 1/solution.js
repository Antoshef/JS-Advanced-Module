function addDestination() {
    let city = document.getElementsByClassName('inputData')[0];
    let country = document.getElementsByClassName('inputData')[1];
    let season = document.getElementById('seasons');
    let table = document.getElementById('destinationsList');
    let row = document.createElement('tr');

    if (city.value != '' && country.value != '') {
        let seasonValue = season.value;
        let letter = seasonValue[0].toUpperCase();
        seasonValue = letter + seasonValue.slice(1);
        row.innerHTML = `<td>${city.value}, ${country.value}</td><td>${seasonValue}</td>`;
        table.appendChild(row);
        let labels = document.getElementsByClassName('summary');
        for (let i = 0; i < labels.length; i++) {
            let current = labels[i].id;
            if (current === season.value) {
                labels[i].value++;
            }
        }
    };
    city.value = '';
    country.value = '';
};