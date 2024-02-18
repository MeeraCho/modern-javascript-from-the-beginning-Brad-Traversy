// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName, age); //John Doe undefined - hoisting

var age = 30;

console.log(age);

//Naming Conventions
//Only letters, numbers, underscores and dollar signs
//can't start with a number
//camelCase

//Re-assigning Variables
age = 31;
console.log(age);

let score;
score = 1;
console.log(score);
if(true){
    score = score + 1 
}

console.log(score)

const x = 100; 
// x = 200; error- const cannot be directly reassigned 
const arr = [1, 2, 3, 4]
// arr = [1, 2, 3, 4, 5] error 
arr.push(5);

console.log(arr);

const person = {
    name: 'Brad'
}

//works good!! it doesn't change variable, it change the value in the property 
person.name = 'John'; 
//add property to variable
person.email = '123@gmail.com';
console.log(person);


//Declare multiple values at once
let a, b, c;
const d = 10, e = 20, f = 30; 

console.log(d);
console.log(e);


