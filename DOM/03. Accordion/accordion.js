function toggle() {

    let button = document.getElementsByClassName('button');
    let text = document.getElementById('extra');

    if (button[0].innerHTML == 'More') {
        text.style.display = 'block';
        button[0].innerHTML = 'Less';
    } else {
        button[0].innerHTML = 'More';
        text.style.display = 'none';
    };
};