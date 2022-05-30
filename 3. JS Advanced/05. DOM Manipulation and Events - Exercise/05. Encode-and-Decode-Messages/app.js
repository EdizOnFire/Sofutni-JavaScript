function encodeAndDecodeMessages() {
    let [input, output] = document.getElementsByTagName('textarea');
    let [encodeButton, decodeButton] = document.getElementsByTagName('button');
    encodeButton.addEventListener('click', event1);
    decodeButton.addEventListener('click', event2);
    function event1() {
        let encodedText = ''
        for (let letter of input.value) {
            let char = letter.charCodeAt(0) + 1
            encodedText += String.fromCharCode(char);
        }

        output.value = encodedText
        input.value = ''
    }

    function event2() {
        let encodedText = ''
        for (let letter of output.value) {
            let char = letter.charCodeAt(0) - 1
            encodedText += String.fromCharCode(char);
        }

        output.value = encodedText
    }
}