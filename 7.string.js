let x;
const name = 'John';
const age = 30;


//concatenation
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals 
x = `Hello, my name is ${name} and my age is ${20 * 2} years old`;

//String Properties and Methods
const s = new String('Hello World');
x = typeof s;
x = s.length; //11 space도 포함 
x = s[0]; //H
x = s.__proto__; //show all methods
x = s.toUpperCase(); //HELLO WORLD
x = s.toLowerCase(); //hello world

x = s.charAt(0); //H

x = s.indexOf('e'); // 1

x = s.substring(2, 4)//llo (시작 인덱스, 인덱스 앞까지) 
x = s.substring(7)//orld (start 7 and went to the end) 
x = s.substring(7)//orld (start 7 and went to the end) 

x = s.slice(-11, -6); //Hello 

x = s.trim(); 

x = s.replace('World', 'John'); //Hello John

x = s.includes('Hell'); //true

x = s.valueOf();

x = s.split(' '); //{'Hello', 'World'}
x = s.split(''); //(11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

console.log(s); // string {'Hello World'}
console.log(x); // Hello World