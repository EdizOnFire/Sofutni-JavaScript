function lockedProfile() {
    let buttons = [...document.getElementsByTagName('button')];
    buttons.forEach(btn => btn.addEventListener('click', showHide));

    function showHide(event) {
        let button = event.target;
        let profile = button.parentNode;
        let moreInformation = profile.getElementsByTagName('div')[0];
        let lockStatus = profile.querySelector('input[type="radio"]:checked').value;

        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}
