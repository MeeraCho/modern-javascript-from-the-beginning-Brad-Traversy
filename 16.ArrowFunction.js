function add(a, b){
    return a + b;
}

const add1 = function(){};

// Arrow function syntax 
const add2 = () => {};

const add3 = (a, b) => {
    return a + b;
}

// Implicit Return
const add4 = (a, b) => a + b;

// single param - leave off parentheses
const double = a => a + 2;

// Returning an object - {} 밖에 () 추가 
const createObject = () => ({});
const createObj = () => ({
    name: 'Alex',
}); // {name: 'Alex'}


// Arrow function in a callback
const numbers = [1, 2, 3];

numbers.forEach(function(n){
    console.log(n);
}); 

numbers.forEach( n => console.log(n))
// 1
// 2
// 3

console.log(createObj());


//--------------- Challenge 1 -----------------
// 1. take an Array 
// 2. find Max and Min numbers 
// 3. return objects
const minMax = (...numbers) => ({
    min: Math.min(...numbers), max: Math.max(...numbers)
}); //{min: 1, max: 5} 

console.log(minMax(1, 2, 3, 4, 5))
