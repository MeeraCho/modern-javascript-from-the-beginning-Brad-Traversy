let num = 5; // number

num = new Number(5.54547); //object
let x = num.toString(); // string
x = num.toString().length; // 1
x = num.toFixed(2); // 5.55 rounded up 
x = num.toPrecision(2); // 5.5 - 2 degit

x = num.toExponential(3); //5.545e+0 지수. 소수 점 세 자리까지 보여준 후, 지수 e 의 몇 승인지 나타내기 
x = num.toLocaleString('en-US'); // returns a string with a language-sensitive representation of this number.

x = num.valueOf(); // to convert a object into a number.

x = Number.MAX_VALUE; // 1.7976931348623157E+308.
x = Number.MIN_VALUE; // 5e-324

console.log(x, typeof x); 
