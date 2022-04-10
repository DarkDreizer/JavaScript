// Eventos
const exampleDiv = document.body.getElementsByClassName('main-container').item(0);
const button = document.querySelector('button');
let step = 'check';

button.addEventListener('click', () => {
  runSteps();
});

function runSteps() {
  switch(step){
    case 'check':
      exampleDiv.innerHTML = '<h2>New Text</h2>';
      step = 'createParagraph';
      break;
    case 'createParagraph':
      createParagraph();
      step = 'setStyle';
      break;
    case 'setStyle':
      setAttribute();
      step = null;
      break;
    default:
      console.log('Terminé!')
      break;
  }
}

function createParagraph() {
  const paragraph = document.createElement('p');
  paragraph.innerText = 'Este es el párrafo creado de manera dinámica';
  paragraph.classList.add('paragraph');
  exampleDiv.append(paragraph);
  const paragraph2 = document.createElement('p');
  paragraph2.innerText = 'Nuevo párrafo demostrativo';
  paragraph2.classList.add('paragraph');
  exampleDiv.append(paragraph2);
}

function setAttribute() {
  const createdParagraph = document.querySelectorAll('.paragraph');
  createdParagraph.item(0).setAttribute('style', 'color: blue');
  createdParagraph.item(1).setAttribute('style', 'color: blue'); 
};