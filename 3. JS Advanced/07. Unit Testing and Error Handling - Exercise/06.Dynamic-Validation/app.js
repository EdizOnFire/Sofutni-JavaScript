function validate() {
    let input = document.getElementById('email');
    let regEx = /[a-z]+@[a-z]+.[a-z]+/;
    input.addEventListener('change', event);

    function event() {
        if (regEx.test(input.value)) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    }
}