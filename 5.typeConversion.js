//String --> Number
let amount = '99.5'; //string
amount = parseInt(amount); //99 number
amount = +amount; //99.5 number
amount = Number(amount); //99.5 number

//Number --> string
amount = amount.toString(); //100 string wrapper 적용 
amount = String(amount);

//String --> Decimal 
amount = parseInt(amount);//99 number - 소수점 없어짐 
amount = parseFloat(amount);//99.5 number

//Number --> Boolean
let amount1 = 1; //
let amount2 = 0; //
amount1 = Boolean(amount); //true 'boolean'
amount2 = Boolean(amount); //false 'boolean'

//NaN - Not a Number. text string에서 number로 바꾸려고 하면 
let amount3 = 'hello'
amount3 = parseInt(amount3) //NaN 'number'
console.log(Math.sqrt(-1));//NaN
console.log(1 + NaN); //NaN
console.log('Hello'/ 5); //NaN
console.log(undefined + undefined);//NaN

console.log(amount3, typeof amount3); 