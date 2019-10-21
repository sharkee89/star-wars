// let rows = document.querySelectorAll('.row');
let container = document.querySelector('.container');
const words = ['May', 'The force', 'Be with', 'You'];
words.forEach((word, index) => {
    let row = document.createElement('div');
    row.className = 'row';
    for (let i = 0; i < word.length; i++) {
        let element = document.createElement('div');
        if (word.charAt(i) === ' ') {
            element.innerHTML += '&nbsp;';
        } else {
            element.appendChild(document.createTextNode(word.charAt(i)));
        }
        row.appendChild(element);
    }
    container.appendChild(row);
});