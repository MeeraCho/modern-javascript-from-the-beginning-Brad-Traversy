
//Logical Assignment
// ||= assigns the right side value only if the left is a falsy value.

//long version
let aa = false;
if (!aa) {
    aa = 20;
} //20

//short version
aa = aa || 10; //10 (false || 10)
aa ||= 30; //30

console.log(aa);

// &&= assigns the right side value only if the left is a truthy value - nullish coalescing operator

let bb = 10;

if(bb) {
    bb = 20;
} //20

bb = bb && 40;
bb &&= 30;


console.log(bb);

// ??= assigns the right side value only if the left is null or undefined.

let c = null;
if (c === null || c === undefined){
    c = 200;
} //200

c = c ?? 100; //100
c ??= 300; //300

console.log(c);




