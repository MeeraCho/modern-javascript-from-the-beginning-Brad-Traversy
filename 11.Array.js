// Array Liternal
const numbers = [12, 45, 33, 29, 39];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

let x = numbers[0]; // 12
x = numbers[0] + numbers[3]; // 41 
x = `My favorite fruit is an ${fruits[2]}`; // My favorite fruit is an orange
x = numbers.length; // 5 

// change element
fruits[2] = 'pear';
x = fruits;   //(3) ['apple', 'grape', 'pear']

// add new element
fruits[3] = 'kiwi'; //(4) ['apple', 'grape', 'pear', 'kiwi'
fruits[fruits.length] = 'blueberry'; //(5) ['apple', 'grape', 'pear', 'kiwi', 'blueberry']

fruits.length = 2; //(2) ['apple', 'grape'



console.log(x);

