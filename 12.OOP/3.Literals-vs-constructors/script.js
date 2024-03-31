//-------------- Literal vs Object ----------------
const strLit = 'Hello';
const strObj = new String('Hi'); //String contructor

console.log(strLit, typeof strLit); //Hello string
console.log(strObj, typeof strObj); //String{''} 'object'

//------------------ Boxing --------------------
// JS adds the wrapper object onto a literal
// we can't use a method on a primitive datatype. so .toUpperCase() can't attach to strLit
// however what happends here is behind the scenes, JS adds a wrapper object to the literal and basically turns it into object, that's called boxing. 
// literal이지만 wraaper씌워서 object method 사용 가능하다 
console.log(strLit.toUpperCase()); // HELLO
console.log(strLit[0]); // H

//------------------ Unboxing --------------------
// object turn into a literal. object can use valueOf() in prototype that method for literal
// object지만 prototype에 있는 literal을 위한 것도 사용가능하다 
console.log(strObj.valueOf(), typeof strObj.valueOf()); // Hi, string
console.log(strLit.constructor); //String() { [native code] }
console.log(strObj.constructor); //String() { [native code] }

//하지만 object인 경우만 String object의 인스턴스이다. 
console.log(strLit instanceof String); //false 
console.log(strObj instanceof String); //true


//------------- Other primitive Types ---------------
const numLit = 20;
const numObj = new Number(20);
console.log(numLit, typeof numLit); //20 'number'
console.log(numObj, typeof numObj); //Number{20} 'object'

const boolLit = true;
const boolObj = new Boolean(true);
console.log(boolLit, typeof boolLit); //true 'boolean'
console.log(boolObj, typeof boolObj); //Boolean {true} 'object'

//array isn't primitive value but rather object.
const arrLit = [1, 2, 3, 4, 5];
const arrObj = new Array(1, 2, 3, 4, 5);
console.log(arrLit, typeof arrLit); //(5)[1, 2, 3, 4, 5] 'object'
console.log(arrObj, typeof arrObj); //(5)[1, 2, 3, 4, 5] 'object'


// function
const funcLit = function (x) {
    return x * x;
} 

console.log(funcLit, typeof funcLit); 
// ƒ (x) {
//     return x * x;
// } 'function' 
// function is object

const funcObj = new Function('x', 'return x * x');
console.log(funcObj(3)); //9 
console.log(funcObj, typeof funcLit); 


//Object 
const obj1 = {}; //Literal syntax
const obj2 = new Object(); //Object Contructor
console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);