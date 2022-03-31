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

/* Ejemplo de encapsulacion */

// Convencion
const encapObject = {
  _id: 1
}

// Functional Scope
function objectFact() {
  let _name = 'Test';
  let _age = 10;
  return {
    height: '160cm',
    name: function() {
      return _name;
    },
    age: function() {
      return _age;
    }
  }
}

const funcObjectEncap = objectFact();
console.log(funcObjectEncap.age());

// Clousure 

function clousure1() {
  const _height = '160cm';
  const _rank = 'Sr.';
  const privateFunc = function() {
    console.log('Hola!');
  }
  return function(id){
    if (id < 1) {
      console.log('No hay nadie registrado');
    } else {
      return {
        name: 'Sr. Nicolas',
        age: 56,
        info: function() {
          privateFunc();
          console.log('Mi rango es ' + _rank, 'Mi altura es '+ _height);
        }
      }
    }
  }
};

const human = clousure1(null, 0);
console.log(human(4).info());

// Metodos
const objectWithMethods = {
  name: 'Rick',
  age: 10,
  greet: function(name) {
    return 'Hola ' + name +', mi nombre es '+ this.name;
  },
  aboutMe: function() {
    return () => {
      return 'Hola señor, mi nombre es ' + this.name;
    }
  }
}

console.log(objectWithMethods.aboutMe()());

// Prototipos
const catPrototype = {
  name: 'Tom',
  age: 10,
  miau() {
    console.log(this.name);
  }
};
const newCat = Object.create(catPrototype);
newCat.name = 'Lucas';
console.log(newCat.miau());

//Polimorfismo
const shape = {
  height: 0,
  width: 0,
  area(){}
}

const triangle = Object.create(shape);
triangle.height = 10;
triangle.width = 4;
triangle.area = function() {
  return (this.height * this.width) / 2;
}

const rectangle = Object.create(shape);
rectangle.height = 10;
rectangle.width = 4;
rectangle.area = function() {
  return this.height * this.width;
}
rectangle.name = 'Rectangulo nuevo';

console.log(triangle.area(), rectangle.area(), rectangle.name);

// Getters, Setters y Static

class Tree {
  _height;
  _age;
  _multiplier;
  constructor(height, age) {
    this._height = height;
    this._age = age;
    this._multiplier = 0.5;
  }
  get age() {
    return this._age;
  }
  set age(newAge) {
    this._age = newAge;
  }

  get currentHeight() {
    return this._height * this._age * this._multiplier;
  }

  static doc() {
    return 'Esta es la clase prototipo para un arbol básico';
  }
}

console.log(Tree.doc());

const appleTree = new Tree(5, 3);
console.log(appleTree.age, appleTree.currentHeight);

appleTree.age = 10;
console.log(appleTree.currentHeight);