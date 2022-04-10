// DOM
// Navegar y encontrar un elemento
const exampleDiv = document.body.getElementsByClassName('main-container').item(0);

// Modificar DOM en tiempo real
function check() {
  exampleDiv.innerHTML = '<h2>New Text</h2>';
}

setTimeout(() => {
  check();
}, 5000);

// Crear nuevos nodos

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

setTimeout(() => {
  createParagraph();
}, 7000);

// Acceder a atributos.

function getClass() {
  console.log(exampleDiv.classList);
  exampleDiv.classList.remove('black');
  console.log(exampleDiv.classList);
}

getClass();

// Buscar y seleccionar multiples elementos

setTimeout(() => {
  const createdParagraph = document.querySelectorAll('.paragraph');
  createdParagraph.item(0).setAttribute('style', 'color: blue');
  createdParagraph.item(1).setAttribute('style', 'color: blue'); 
}, 8000);
