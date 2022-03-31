/* Ejemplo de funcion, usando un parametro 
y retornando un valor */
const constantVariable = 'Test 2';

function letAssignation(value) {
  return value;
};

console.log(letAssignation(constantVariable));

/* Ejemplo de alance(scope) de las variables */
// No se puede acceder a una variable con scope funcional desde afuera
if (true) {
  let functionalScope = 'No se muestra';
  var globalScope = 'Si se muestra';
}

console.log(globalScope);

/* Ejemplo de flujos de control */
let lastCheck = false;
let incrementNumber = 0;

function addNumber() {
  if(incrementNumber == 6) {
    incrementNumber++;
    console.log('Loop a terminado the number is ' + incrementNumber);
  } else {
    incrementNumber++;
  }
}

do {
  addNumber();
}
while (incrementNumber < 7);

/* Ejemplo de flujos de control */
const emptyArray = [];

function fillArray() {
  switch(emptyArray.length) {
    case 0:
      emptyArray.push('First');
      break;
    case 1:
      emptyArray.push('Second');
      break;
    case 2:
      emptyArray.push(3);
      break;
    case 3:
      emptyArray.push(4);
      break;
    case 4:
      emptyArray.push('finish');
      break;
  }
}

for(let i = 0; emptyArray.length < 5; i++) {
  fillArray();
}

console.log(emptyArray);

/* Ejemplo de funcion de orden mayor */
let funcCheck = true;

function checkConditional() {
  return funcCheck;
}

function returnValue(text) {
  return text + (funcCheck ? ': el Check es cierto' : ': el check es falso');
}

function action(condition) {
  if(condition) {
    return returnValue('Este es el valor a retonar');   
  } else {
    return returnValue('Esto se retorna cuando es falso');
  }
}

console.log(action(checkConditional()));
funcCheck = false;
console.log(action(checkConditional()));

/* Ejemplo de objetos */

const firstObject = {
  list: 'This is a list',
  number: 1,
  test: function () {checkConditional()}
};

console.log(firstObject);
console.log(firstObject.test());

const secondObject = new Object('Test');// Crea un objecto en base al valor de string
console.log(secondObject);

class ObjectClass {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  myName() {
    return this.name;
  }
};

const newObject = new ObjectClass('Custom Object', 10);
console.log(newObject.myName());

function objectFunction(name, age) {
  return {
    name: name,
    age: age 
  }
}

const funcObject = objectFunction('Second Custom Object', 20);
console.log(funcObject);