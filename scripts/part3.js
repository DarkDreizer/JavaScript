'use strict';
// Herencia

const vehicle = {
  color: 'Red',
  initialSpeed: 0,
  accelerate: () => {
    console.log('Acelerando');
  }
}

const car = Object.create(vehicle);
console.log(car.color);
car.accelerate();

class Cat {
  age;
  name;

  constructor(age = 1, name = 'Tom') {
    this.age = age;
    this.name = name;
  }

  miau() {
    console.log('Maiu!');
  }
}

class AngryCat extends Cat {
  eyeColor;

  constructor(age, name, eyeColor) {
    super(age, name);
    this.eyeColor = eyeColor;
  }

  miauAndBite() {
    this.miau();
    console.log('Bite');
  }
}

const firstCat = new AngryCat(3, 'Charlie', 'blue');
console.log(firstCat.name);
console.log(firstCat.eyeColor);
firstCat.miauAndBite();

/* Intance of */

function vehicleProt() {}
function carProt() {}

carProt.prototype = Object.create(vehicleProt.prototype);

const carInstance = new carProt();
console.log('Intance of in prototypes', vehicleProt.prototype.isPrototypeOf(carInstance));

console.log(firstCat instanceof Cat);
console.log(firstCat instanceof AngryCat);
console.log(new Cat() instanceof Cat);
console.log(new Cat() instanceof AngryCat);

const secondCat = new Cat();
const thirdCat = new AngryCat();
const fourthCat = new Cat();

function checkCat(cat) {
  if (cat instanceof AngryCat) {
    console.log('No dar el gato');
  } else {
    console.log('Dar gato al niño')
  }
}

const catList = [firstCat, secondCat, thirdCat, fourthCat];
catList.forEach((currentCat) => {
  checkCat(currentCat);
});

// Symbols

const firstSymbol = Symbol('first');
const secondSymbol = Symbol('second');

console.log(firstSymbol == secondSymbol);

const recipt = {
  [firstSymbol]: 'Company Co.',
  name: 'Carlos',
  total: 100
};
recipt.firstSymbol = 0;
console.log(recipt.firstSymbol, recipt[firstSymbol]);

const exampleObject = {
  color: 'Blue',
  size: 20,
};

console.log(Object.keys(exampleObject));
console.log(Object.keys(recipt));

// Arrays

let firstArray = ['First', 'Second'];
console.log(firstArray.length);
firstArray.push('Third');
firstArray.push('Last');

console.log(firstArray[0]);
console.log(firstArray[1]);
console.log(firstArray[2]);

delete firstArray[1];
console.log(firstArray, firstArray.length);

firstArray.splice(1, 1);
console.log(firstArray, firstArray.length);
firstArray.splice(1, 1, 'New Third', 'Fourth', 'Fourth');
console.log(firstArray, firstArray.length);
const secondArray = firstArray.map((element) => element + ' x');
console.log(firstArray, secondArray);
/*
Como funciona el iterador
let okIterator = "OK"[Symbol.iterador]();

okIterator.next(); // {value: 'O', done: false}
okIterator.next(); // {value: 'K', done: false}
okIterator.next(); // { value: undefined, done: true} 
*/

let mapExample = new Map();
mapExample.set('fruit', 'apple');
console.log(mapExample, mapExample.get('fruit'));
mapExample.set('fruit', 'orange');
console.log(mapExample, mapExample.get('fruit'));
mapExample.delete('fruit');
console.log(mapExample);

let setExample = new Set();
setExample.add('Nails');
setExample.add('Hammer');
setExample.add('Nails');
setExample.delete('Hammer');
console.log(setExample);

