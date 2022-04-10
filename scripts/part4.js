// Modulos
'use strict';

// const { arrayToSet } = require('../modules/arrayToSet');
import { arrayToSet } from '../modules/arrayToSet.js';

let newArray = ['Apple','Apple','Pear','Pear'];
// const newSet = arrayToSet(newArray);
const newSet = arrayToSet(newArray);
console.log(newSet);

// Callback
console.log('First');
setTimeout(() => console.log('Second'), 1000);
console.log('Third');

// Promise
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(value));

let loaderState = false;

function promiseExample() {
  loaderState = true;
  return new Promise((resolve, reject) => {
    const condition = true;
    if (condition) {
      setTimeout(() => resolve('Exitoso por la condicion'), 5000);
    } else {
      return reject('Fallo porque la condicion tiene valor falso');
    }
  })
}

function execPromise() {
  return promiseExample()
    .then((value) => console.log(value))
    .catch((value) => console.warn(value))
    .finally(() => {
      console.log('La promesa termino');
      loaderState = false;
    });
}

// Async Function
async function exampleAsync() {
  await execPromise();
  if(!loaderState) {
    console.log('Condicion dentro del async');
  } else {
    console.log('Aun esta cargando');
  }
  await execPromise();
  console.log('La promesa se completo por segunda vez');
}

exampleAsync();
console.warn('Codigo ejecutado luego que la funcion async inicie');

// Generators
function* powers(n) {
  for(let current = n;; current *= n){
    yield current;
  }
}

for(let power of powers(3)) {
  if (power > 50) break;
  console.log(power);
}

function* generator() {
  console.warn("Primera parte del iterador");
  yield 1;
  console.log("Segunda parte del iterador");
  yield 2;
  console.log("Tercera parte del iterador");
  yield 3;
}

const gen = generator(); // "Generator { }"
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value);