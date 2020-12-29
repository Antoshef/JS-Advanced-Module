function attachEventsListeners() {

    let inputDays = document.getElementById('days');
    let inputHours = document.getElementById('hours');
    let inputMinutes = document.getElementById('minutes');
    let inputSeconds = document.getElementById('seconds');

    let main = document.getElementsByTagName('main');
    main = main[0];

    main.addEventListener('click', function (event) {
        let current = 0;
        let id = event.target.id;
        switch (id) {
            case 'daysBtn':
                current = inputDays.value;
                document.getElementById('hours').value = current * 24;
                document.getElementById('minutes').value = current * 24 * 60;
                document.getElementById('seconds').value = current * 24 * 60 * 60;
                break;
            case 'hoursBtn':
                current = inputHours.value;
                document.getElementById('days').value = current / 24;
                document.getElementById('minutes').value = current * 60;
                document.getElementById('seconds').value = current * 60 * 60;
                break;
            case 'minutesBtn':
                current = inputMinutes.value;
                document.getElementById('days').value = current / 24 / 60;
                document.getElementById('hours').value = current / 60;
                document.getElementById('seconds').value = current * 60;
                break;
            case 'secondsBtn':
                current = inputSeconds.value;
                document.getElementById('days').value = current / 24 / 60 / 60;
                document.getElementById('hours').value = current / 60 / 60;
                document.getElementById('minutes').value = current / 60;
                break;
        }
    });
};