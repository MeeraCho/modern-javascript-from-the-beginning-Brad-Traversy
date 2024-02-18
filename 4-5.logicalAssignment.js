
//Logical Assignment
// ||= assigns the right side value only if the left is a falsy value.

//long version
let a = false;
if (!a) {
    a = 20;
} //20

//short version
a = a || 10; //10 (false || 10)
a ||= 30; //30

console.log(a);

// &&= assigns the right side value only if the left is a truthy value - nullish coalescing operator

let b = 10;

if(b) {
    b = 20;
} //20

b = b && 40;
b &&= 30;


console.log(b);

// ??= assigns the right side value only if the left is null or undefined.

let c = null;
if (c === null || c === undefined){
    c = 200;
} //200

c = c ?? 100; //100
c ??= 300; //300

console.log(c);




