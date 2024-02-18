// //Primitive Data Types
// 1. string - Sequence of characters. Must be in quotes or backticks
// 2. number - integers as well as floating-point  numbers 
// 3. Boolean -Logical entity / true or false
// 4. Null - Intentional absence of any object value
// 5. Undefined - A Variable that has not yet been defined / assigned
// 6. Symbol - Built-in object whose constructor returns a unique symbol


//string
const firstName = 'Sara';
console.log(firstName, typeof firstName);

//Number
const age = 30;
const temp =98.9;

//Boolean
const hasKids = true;

//Null
const aptNumber = null; 


//Undefined
const score = undefined;

//symbol
const id = Symbol('id');

//BigInt
const n = 924384753948539485345n;

//Reference Data Types
//array
const numbers = [1, 2, 3, 4]

//objects
const person = {
    name: "Jack"
}

//function
function sayHello(){
    console.log('Hello');
}

const output = sayHello;
console.log(output, typeof output);


// Values are stored on the stack
const personName = 'John';
const personAge = 30;

// Reference values are stored on the heap. Variable name are stored on the stack
const personInfo = {
    name: 'Brad',
    age: 40
}

let newName = personName;
newName = 'Johnathan';

let newPerson = personInfo; 
newPerson.name = "Mira"

console.log(personName, newName); // John Johnathan

//both pointing same spot 
console.log(personInfo, newPerson); // {name: 'Mira', age: 40} {name: 'Mira', age: 40}

