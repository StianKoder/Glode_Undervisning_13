const body = document.getElementById('body');
const paragraph = document.getElementById('text-paragraph');
const button = document.getElementById('button');
const input = document.querySelector('#input');

function changeText() {
  paragraph.textContent = 'Ny tekst gjennom funksjon';
  // paragraph.classList.add('paragraph-color');
  body.classList.toggle('body-dark');
}

function changeTextInput(event) {
  console.log(event);

  const text = event.target.value;

  if (event.key === 'Enter') {
    paragraph.textContent = text;
  }
}

input.addEventListener('keyup', changeTextInput);
button.addEventListener('click', changeText);
