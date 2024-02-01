let x; 

x = Math.sqrt(9); // 3
x = Math.abs(-5); // 5 absolute number
x = Math.round(4.2); // 4 round up or down
x = Math.round(4.6); // 5 round up or down
x = Math.ceil(4.2); // 5 round up 
x = Math.floor(4.6); // 4 round up 
x = Math.pow(2, 3); // 8
x = Math.min(4, 5, 3) // 3
x = Math.max(4, 5, 3) // 5
x = Math.floor(Math.random() * 10 + 1) // 0~1 -> 1~10

let a = Math.floor(Math.random() * 100 + 1); 
let y = Math.floor(Math.random() * 50 + 1); 

console.log(`${a} + ${y} = ${a + y}`);
console.log(`${a} - ${y} = ${a - y}`);
console.log(`${a} * ${y} = ${a * y}`);
console.log(`${a} / ${y} = ${a / y}`);
console.log(`${a} % ${y} = ${a % y}`);
