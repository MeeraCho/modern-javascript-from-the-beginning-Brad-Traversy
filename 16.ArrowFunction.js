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

