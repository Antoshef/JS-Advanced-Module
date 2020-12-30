function lockedProfile() {
    

    Array.from(document.getElementsByClassName('profile')).forEach(profile => {
        let btn = profile.querySelector('button');

        btn.addEventListener('click', () => {
            let unlocked = profile.getElementsByTagName('input')[1];
            let extraInfo = profile.querySelector('div');
            if (unlocked.checked && btn.textContent == 'Show more') {
                extraInfo.style.display = 'block';
                btn.textContent = 'Hide it';
            } else if (unlocked.checked && btn.textContent == 'Hide it'){
                extraInfo.style.display = 'none';
                btn.textContent = 'Show more';
            };
        });
    });
};