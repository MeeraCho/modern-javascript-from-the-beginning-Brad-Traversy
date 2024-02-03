// Array Liternal
const numbers = [12, 45, 33, 29, 39];
const mixed = [12, 'Hello', true, null];

// Array Constructor
let fruits = new Array('apple', 'grape', 'orange');

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

//fruits.length = 2; //(2) ['apple', 'grape'


// ------- Methods ----------
numbers.push(100); //(6) [12, 45, 33, 29, 39, 100]
numbers.pop(); //(5) [12, 45, 33, 29, 39]
numbers.unshift(99); // (6) [99, 12, 45, 33, 29, 39]
numbers.shift(); // (5) [12, 45, 33, 29, 39]
numbers.reverse(); // (5) [39, 29, 33, 45, 12]

x = numbers.includes(39); //true
x = numbers.indexOf(39); // 0
x = numbers.indexOf(200); // -1

x = numbers.slice(1, 4) //(3) [29, 33, 45] - doesn't change initial array 
x = numbers.slice(1); //(4) [29, 33, 45, 12]
// x = numbers.splice(1, 4) // (4) [29, 33, 45, 12] - change initial array, 해당 아이템 빼고 plucked out the array, delete 할 때 유용 
// x = numbers.splice(3, 1) // [45] - [39, 29, 33, 45, 12] 중에서 


// ------- Method chaining -------
// x = numbers.splice(1, 4).reverse().toString()// 12,45,33,29
// x = numbers.splice(1, 4).reverse().toString().charAt(0) // 1 - 12중에서 1 


// ---------Nested Array ---------
fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'buleberry', 'rasberry'];

// fruits.push(berries); // (4) ['apple', 'pear', 'orange', Array(3)]
// x = fruits[3]; //(3) ['strawberry', 'buleberry', 'rasberry']
// x = fruits[3][1]; //(3) buleberry

// const allFruits = [fruits, berries]; // [Array(4), Array(3)] 
// x = allFruits[1][0] //strawberry


// ---------Concat Arrays + spread operator ---------
// x = fruits.concat(berries); //(6) ['apple', 'pear', 'orange', 'strawberry', 'buleberry', 'rasberry']
x = [ ...fruits, ...berries] // add items in the arrays, not the array itself. (6) ['apple', 'pear', 'orange', 'strawberry', 'buleberry', 'rasberry']


// ---------Flatten Arrays  ---------
const arr = [1, [2, 3], 4, 5, [6, 7, 8]]
x = arr.flat() //(8) [1, 2, 3, 4, 5, 6, 7, 8]


// ---------Static Methods on Array Object  ---------
x = Array.isArray(arr); //true
x = Array.isArray('Hello'); //false

x = Array.from('12345'); //(5) ['1', '2', '3', '4', '5']

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c); //(3) [1, 2, 3]


// -------- exercise ------------
const arr1 = [1, 2, 3, 4, 5];
// arr1.push(6);
// arr1.unshift(0);
// arr1.reverse();

// arr1.push(6).unshift(0).reverse(); //error push(6)와 unshift(0)는 number를 return함 

const arr2 = [5, 6, 7, 8, 9]
// arr2.shift()
// const arr3 = [...arr1, ...arr2] // (8) [1, 2, 3, 4, 6, 7, 8, 9]

// const arr4 = arr1.slice(0, 4).concat(arr2) //(8) [1, 2, 3, 4, 6, 7, 8, 9]

const arr5 = [...arr1, ...arr2];
arr5.splice(4, 1); // (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(arr5); 


